import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import CustomBreadcrumbs from '../../../../../component/Breadcrumb/Breadcrumb';
import { observer } from 'mobx-react-lite';
import store from '../../../../../store/store';
import ViewListProfile from '../common/component/ViewListProfile';
import Title from '../../../../../component/DocumentTitle/Title';
import { useNavigate } from 'react-router-dom';
import UserTable from '../common/component/UserTable';
import { columns, filterOptions, statusOptions } from './utils/student.constant';
import { dashboard } from '../../../../../config/routes/dashboard/indexRoutes';
import { student } from '../../../../../config/routes/dashboard/userRoutes/constantRoutes';
import TableCustomFilter from '../../component/common/TableCustomFilter';
import { handleErrorMessage } from '../../../../../views/utils/function';
import UserGridIndex from '../common/component/UserGridIndex';
import DashSetting from '../../../component/common/DashSetting';

const StudentIndex = observer(() => {
	const {
		StudentStore: {
			getStudents,
			studentList,
			downloadStudentList,
			downloadTemplate,
			showType,
			setShowType,
			applyFilter,
			filter,
		},
		auth: { openNotification, checkPermission },
	} = store;
	const navigate = useNavigate();
	const [selectedFilterValue, setSelectedFilterValue] = useState({
		searchQuery: filter.search,
		startYear: filter.startYear,
		endYear: filter.endYear,
		status: filter.status,
		standard: filter.standard,
		search: filter.search,
		appliedSelectedFilter: filter.appliedSelectedFilter,
	});

	const [downloadLoading, setDownloadLoading] = useState(false);
	const [openListProfile, setOpenListProfile] = useState(false);
	const [openApplyFilter, setOpenApplyFilter] = useState(null);
	const [openSetting, setOpenSetting] = useState(false);

	useEffect(() => {
		if (studentList.apicalled === false) {
			getStudents({
				search: filter.search,
				startYear: filter.startYear,
				endYear: filter.endYear,
				standard: filter.standard,
				status: filter.status,
				page: filter.page,
			})
				.then(() => {})
				.catch((err) => {
					if (err.status !== 422) {
						handleErrorMessage(err);
					}
				});
		}
	}, []);

	const downloadSheet = () => {
		setDownloadLoading(true);
		downloadStudentList({ standard: 1, status: 'ACCEPTED' })
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
			selectedFilterValue.appliedSelectedFilter,
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

	return checkPermission({ key: 'student', value: 0 }) ? (
		<>
			<Title title="Student List" />

			<CustomBreadcrumbs
				data={[
					{ link: '/', title: 'Home' },
					{ link: dashboard.Home, title: 'Dashboard' },
					{ link: dashboard.Users, title: 'Users' },
					{ title: 'Student List' },
				]}
			/>

			<DashSetting
				open={openSetting}
				setOpen={setOpenSetting}
				title="Setting"
				showType={showType}
				setShowType={setShowType}
			/>

			<TableCustomFilter
				selectedFilterValue={selectedFilterValue}
				setSelectedFilterValue={setSelectedFilterValue}
				handleSelectedFilterValue={handleSelectedFilterValue}
				handleSearch={handleSearch}
				openSetting={openSetting}
				setOpenSetting={setOpenSetting}
				createLink={() => navigate(student.CREATE)}
				disabled={downloadLoading}
				onClicks={downloadSheet}
				openApplyFilter={openApplyFilter}
				setOpenApplyFilter={setOpenApplyFilter}
				filterOptions={filterOptions}
				statusOptions={statusOptions}
				onClickss={() => downloadTemplate('rahul')}
			/>

			{showType === 'table' ? (
				<UserTable
					columns={columns}
					data={studentList.data}
					details={studentList}
					setOpenListProfile={setOpenListProfile}
					download={downloadStudentList}
					editLink={student.EDIT}
					createLink={student.CREATE}
					type="student"
				/>
			) : (
				<UserGridIndex
					data={studentList.data}
					details={studentList}
					editLink={student.EDIT}
					type="student"
				/>
			)}

			<ViewListProfile
				openListProfile={openListProfile}
				setOpenListProfile={setOpenListProfile}
				type="student"
			/>
		</>
	) : (
		<h1>Do not have permission</h1>
	);
});

export default StudentIndex;
