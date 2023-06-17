import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { visuallyHidden } from '@mui/utils';
import { EditOutlined, ViewQuiltOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import CustomPaper from '../../../../../../component/Paper/Paper';
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';
import { getGender, getStandards } from '../../../../../../config/utils/profileConstant';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'username';
const DEFAULT_ROWS_PER_PAGE = 10;

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headers } = props;
  const createSortHandler = (newOrderBy) => (event) => {
    onRequestSort(event, newOrderBy);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headers.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align ? headCell.align : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            width={headCell.width ? headCell.width : ''}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headers: PropTypes.array.isRequired,
};

const UserTable = ({ columns, data, setOpenListProfile, editLink, type, details }) => {
  const navigate = useNavigate();
  const [order, setOrder] = React.useState(DEFAULT_ORDER);
  const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [visibleRows, setVisibleRows] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
  const [paddingHeight, setPaddingHeight] = React.useState(0);

  React.useEffect(() => {
    let rowsOnMount = stableSort(data, getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY));

    rowsOnMount = rowsOnMount.slice(
      0 * DEFAULT_ROWS_PER_PAGE,
      0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE,
    );

    setVisibleRows(rowsOnMount);
  }, []);

  const handleRequestSort = React.useCallback(
    (event, newOrderBy) => {
      const isAsc = orderBy === newOrderBy && order === 'asc';
      const toggledOrder = isAsc ? 'desc' : 'asc';
      setOrder(toggledOrder);
      setOrderBy(newOrderBy);

      const sortedRows = stableSort(data, getComparator(toggledOrder, newOrderBy));
      const updatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

      setVisibleRows(updatedRows);
    },
    [order, orderBy, page, rowsPerPage],
  );

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = React.useCallback(
    (event, newPage) => {
      setPage(newPage);

      const sortedRows = stableSort(data, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(
        newPage * rowsPerPage,
        newPage * rowsPerPage + rowsPerPage,
      );

      setVisibleRows(updatedRows);

      // Avoid a layout jump when reaching the last page with empty rows.
      const numEmptyRows = newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - data.length) : 0;

      const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
      setPaddingHeight(newPaddingHeight);
    },
    [order, orderBy, dense, rowsPerPage],
  );

  const handleChangeRowsPerPage = React.useCallback(
    (event) => {
      const updatedRowsPerPage = parseInt(event.target.value, 10);
      setRowsPerPage(updatedRowsPerPage);

      setPage(0);

      const sortedRows = stableSort(data, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(
        0 * updatedRowsPerPage,
        0 * updatedRowsPerPage + updatedRowsPerPage,
      );

      setVisibleRows(updatedRows);

      // There is no layout jump to handle on the first page.
      setPaddingHeight(0);
    },
    [order, orderBy],
  );

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'red',
      color: 'black',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: 10,
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#E7EBF0',
      height: '10px',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <CustomPaper>
      <TableContainer sx={{ height: `calc(100vh - 285px)` }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
        >
          <EnhancedTableHead
            headers={columns}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
          />
          {details.fetchLoading ? (
            <TableBody>
              <TableRow>
                <TableCell align="center" colSpan={columns.length + 1}>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {visibleRows
                ? data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.id);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <StyledTableRow
                          hover
                          onClick={(event) => handleClick(event, row.id)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                          sx={{ cursor: 'pointer' }}
                        >
                          <StyledTableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </StyledTableCell>
                          <StyledTableCell component="th" id={labelId} scope="row" padding="none">
                            {row.firstName} {row.lastName}
                          </StyledTableCell>
                          <StyledTableCell align="left">{row.username}</StyledTableCell>
                          <StyledTableCell align="left">{getGender(row.profile?.gender)?.label}</StyledTableCell>
                          <StyledTableCell align="left">{row.phoneNumber}</StyledTableCell>
                          {type === 'student' && (
                            <StyledTableCell align="left">
                              <span>{getStandards(row.profile?.standard)?.label}</span>
                            </StyledTableCell>
                          )}
                          <StyledTableCell align="left">
                            {row.profile?.dob
                              ? moment(row.profile?.dob).format('DD-MM-YYYY')
                              : '----'}
                          </StyledTableCell>
                          <StyledTableCell align="left">{row.profile?.fatherName}</StyledTableCell>
                          <StyledTableCell align="left">{row.profile?.motherName}</StyledTableCell>
                          <StyledTableCell align="center">
                            <IconButton
                              title="view row data"
                              onClick={() => setOpenListProfile(row)}
                            >
                              <ViewQuiltOutlined />
                            </IconButton>
                            <IconButton
                              title="edit student"
                              onClick={() => navigate(editLink, { state: row.id })}
                            >
                              <EditOutlined />
                            </IconButton>
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })
                : null}
              {paddingHeight > 0 && (
                <StyledTableRow
                  style={{
                    height: paddingHeight,
                  }}
                >
                  <StyledTableCell colSpan={6} />
                </StyledTableRow>
              )}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ borderTop: '1px solid lightgrey' }}
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </CustomPaper>
  );
};

UserTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  setOpenListProfile: PropTypes.func.isRequired,
  editLink: PropTypes.string.isRequired,
  type: PropTypes.string,
  details: PropTypes.object,
};

export default UserTable;
