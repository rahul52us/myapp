import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import CustomBreadcrumbs from '../../../../../component/Breadcrumb/Breadcrumb';
import { observer } from 'mobx-react-lite';
import CustomPaper from '../../../../../component/Paper/Paper';
import store from '../../../../../store/store';
import ViewListProfile from '../common/component/ViewListProfile';
import Title from '../../../../../component/DocumentTitle/Title';
import { useNavigate } from 'react-router-dom';
import { dashboard } from '../../../../../config/routes/dashboard/indexRoutes';
import { columns, filterOptions, statusOptions } from './utils/teacher.constant';
import { teacher } from '../../../../../config/routes/dashboard/userRoutes/constantRoutes';
import TableCustomFilter from '../../component/common/TableCustomFilter';
import { handleErrorMessage } from '../../../../utils/function';
import UserTable from '../common/component/UserTable';
import UserGridIndex from '../common/component/UserGridIndex';
import DashSetting from '../../../component/common/DashSetting';

const TeacherIndex = observer(() => {
	const {
		TeacherStore: { getTeachers, teacherList, filter, applyFilter, downloadTeacherList, showType, setShowType },
		auth: { openNotification, checkPermission },
	} = store;
	const navigate = useNavigate();
	const [openApplyFilter, setOpenApplyFilter] = useState(null);
	const [downloadLoading, setDownloadLoading] = useState(false);
	const [openListProfile, setOpenListProfile] = useState(false);
	const [openSetting, setOpenSetting] = useState(false);
	const [selectedFilterValue, setSelectedFilterValue] = useState({
		searchQuery: filter.search,
		startYear: filter.startYear,
		endYear: filter.endYear,
		status: filter.status,
		search: filter.search,
		appliedSelectedFilter:filter.appliedSelectedFilter
	});


	useEffect(() => {
		if (teacherList.apicalled === false) {
			getTeachers({ status: 'ACCEPTED', page: teacherList.currentPage })
				.then(() => {})
				.catch((err) => {
					handleErrorMessage(err);
				});
		}
	}, []);

	const downloadSheet = () => {
		setDownloadLoading(true);
		downloadTeacherList({ status: 'ACCEPTED' })
			.then(() => {
				openNotification({ type: 'success', message: 'download successfully' });
			})
			.catch(() => {
				openNotification({ type: 'error', message: 'something went wrong' });
			})
			.finally(() => {
				setDownloadLoading(false);
			});
	};

	const sendQuery = (value) => {
		applyFilter(
			value,
			selectedFilterValue.startYear,
			selectedFilterValue.endYear,
			selectedFilterValue.status,
			selectedFilterValue.standard,
			filter.page,
		)
			.then(() => {})
			.catch((err) => {
				if (err === 'An error occurred') {
					handleErrorMessage({ message: 'Something went wrong', type: 'error' });
				} else {
					alert(err);
					handleErrorMessage({ message: err, type: 'error' });
				}
			});
	};

	const delayedSearch = useCallback(
		debounce((q) => sendQuery(q), 1000),
		[
			selectedFilterValue.startYear,
			selectedFilterValue.endYear,
			selectedFilterValue.status,
			selectedFilterValue.standard,
			filter.page,
		],
	);

	const handleSearch = (e) => {
		setSelectedFilterValue({ ...selectedFilterValue, searchQuery: e.target.value });
		delayedSearch(e.target.value);
	};

	const handleSelectedFilterValue = () => {
		setOpenApplyFilter(null);
		applyFilter(
			selectedFilterValue.searchQuery,
			selectedFilterValue.startYear,
			selectedFilterValue.endYear,
			selectedFilterValue.status,
			selectedFilterValue.standard,
			filter.page,
			selectedFilterValue.appliedSelectedFilter
		)
			.then(() => {})
			.catch((err) => {
				if (err === 'An error occurred') {
					handleErrorMessage({ message: 'Something went wrong', type: 'error' });
				} else {
					alert(err);
					handleErrorMessage({ message: err, type: 'error' });
				}
			});
	};

	return checkPermission({ key: 'teacher', value: 0 }) ? (
		<>
			<Title title="Teacher List" />
			<CustomBreadcrumbs
				data={[
					{ link: '/', title: 'Home' },
					{ link: dashboard.Home, title: 'Dashboard' },
					{ link: dashboard.Users, title: 'Users' },
					{ title: 'Teachers List' },
				]}
			/>
			<TableCustomFilter
				selectedFilterValue={selectedFilterValue}
				setSelectedFilterValue={setSelectedFilterValue}
				handleSelectedFilterValue={handleSelectedFilterValue}
				handleSearch={handleSearch}
				disabled={downloadLoading}
				onClicks={downloadSheet}
				openSetting={openSetting}
				setOpenSetting={setOpenSetting}
				openApplyFilter={openApplyFilter}
				setOpenApplyFilter={setOpenApplyFilter}
				filterOptions={filterOptions}
				statusOptions={statusOptions}
				createLink={() => navigate(teacher.CREATE)}
			/>
			<DashSetting
				open={openSetting}
				setOpen={setOpenSetting}
				title="Setting"
				showType={showType}
				setShowType={setShowType}
			/>
			{showType === 'table' ? (
				<CustomPaper p={1}>
					<UserTable
						columns={columns}
						data={teacherList.data}
						setOpenListProfile={setOpenListProfile}
						editLink={teacher.EDIT}
						createLink={teacher.CREATE}
						type="teacher"
						details={teacherList}
					/>
				</CustomPaper>
			) : (
				<UserGridIndex
					data={teacherList.data}
					details={teacherList}
					editLink={teacher.EDIT}
					type="teacher"
				/>
			)}
			<ViewListProfile openListProfile={openListProfile} setOpenListProfile={setOpenListProfile} />
		</>
	) : (
		<h1>Do not have permission</h1>
	);
});

export default TeacherIndex;
