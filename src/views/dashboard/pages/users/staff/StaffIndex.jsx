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
import { columns, filterOptions, statusOptions } from './utils/staff.constant';
import { staff } from '../../../../../config/routes/dashboard/userRoutes/constantRoutes';
import TableCustomFilter from '../../component/common/TableCustomFilter';
import UserTable from '../common/component/UserTable';
import UserGridIndex from '../common/component/UserGridIndex';
import DashSetting from '../../../component/common/DashSetting';
import { handleErrorMessage } from '../../../../utils/function';

const StaffIndex = observer(() => {
	const navigate = useNavigate();
	const {
		StaffStore: { getStaff, staffList, showType, setShowType , filter, applyFilter},
		auth: { openNotification, checkPermission },
	} = store;
	const [selectedFilterValue, setSelectedFilterValue] = useState({
		searchQuery: filter.search,
		startYear: filter.startYear,
		endYear: filter.endYear,
		status: filter.status,
		standard: filter.standard,
		search: filter.search,
		appliedSelectedFilter:filter.appliedSelectedFilter
	});
	const [openSetting, setOpenSetting] = useState(false);
	const [openListProfile, setOpenListProfile] = useState(false);
	const [openApplyFilter, setOpenApplyFilter] = useState(null);

	useEffect(() => {
		if (staffList.apicalled === false) {
			getStaff({ status: 'ACCEPTED', page: 1 })
				.then(() => {})
				.catch((err) => {
					openNotification({ message: err?.message, type: 'error' });
				});
		}
	}, []);

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

	return checkPermission({ key: 'staff', value: 0 }) ? (
		<>
			<Title title="Staff List" />
			<CustomBreadcrumbs
				data={[
					{ link: '/', title: 'Home' },
					{ link: dashboard.Home, title: 'Dashboard' },
					{ link: dashboard.Users, title: 'Users' },
					{ title: 'Staff' },
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
				createLink={() => navigate(staff.CREATE)}
				openSetting={openSetting}
				setOpenSetting={setOpenSetting}
				openApplyFilter={openApplyFilter}
				setOpenApplyFilter={setOpenApplyFilter}
				filterOptions={filterOptions}
				statusOptions={statusOptions}
			/>
			{showType === 'table' ? (
				<CustomPaper p={1}>
					<UserTable
						columns={columns}
						data={staffList.data}
						setOpenListProfile={setOpenListProfile}
						editLink={staff.EDIT}
						createLink={staff.CREATE}
						type="staff"
						details={staffList}
					/>
				</CustomPaper>
			) : (
				<UserGridIndex
					data={staffList.data}
					details={staffList}
					editLink={staff.EDIT}
					type="staff"
				/>
			)}
			<ViewListProfile openListProfile={openListProfile} setOpenListProfile={setOpenListProfile} />
		</>
	) : (
		<h1>Do not have permission</h1>
	);
});

export default StaffIndex;
