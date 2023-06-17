import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box, Grid, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import CustomButton from '../../Button/Button';
import Typography from '../../Typography/Typography';
import styled from 'styled-components';

const validationSchema = Yup.object().shape({
  startYear: Yup.date()
    .nullable()
    .required('Start Date is required')
    .typeError('Start date is required'),
  endYear: Yup.date()
    .nullable()
    .required('End Date is required')
    .min(Yup.ref('startYear'), 'End Date should be after Start Date')
    .typeError('End date is required'),
});

const DatePickerWrapper = styled.div`
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 0.375rem 0.75rem;
`;

function CustomDateRange({ selectedFilterValue, setSelectedFilterValue }) {
  const years = Array.from(
    { length: new Date().getFullYear() - 1990 + 1 },
    (_, index) => 1990 + index,
  );
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleSubmit = (values) => {
    console.log('the values ', values);
    setSelectedFilterValue({
      ...selectedFilterValue,
      startYear: values.startYear,
      endYear: values.endYear,
    });
  };

  // const handleClear = (formik, fieldName) => {
  //   formik.setFieldValue(fieldName, null);
  //   setSelectedFilterValue({
  //     ...selectedFilterValue,
  //     fieldName: null,
  //   });
  // };

  const CustomHeader = ({ date, changeYear, changeMonth, decreaseMonth, increaseMonth }) => {
    return (
      <div style={{ margin: 10, display: 'flex', justifyContent: 'center' }}>
        <button onClick={decreaseMonth}>{'<'}</button>
        <select value={date.getFullYear()} onChange={(e) => changeYear(parseInt(e.target.value))}>
          {years.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          value={months[date.getMonth()]}
          onChange={(e) => changeMonth(months.indexOf(e.target.value))}
        >
          {months.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={increaseMonth}>{'>'}</button>
      </div>
    );
  };

  CustomHeader.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    changeYear: PropTypes.func.isRequired,
    changeMonth: PropTypes.func.isRequired,
    decreaseMonth: PropTypes.func.isRequired,
    increaseMonth: PropTypes.func.isRequired,
  };

  const muiTheme = createTheme(); // Create the MUI theme

  return (
    <ThemeProvider theme={muiTheme}>
      <Box m={1}>
        <Typography variant="paragraph" sx={{ marginLeft: '5px' }}>
          Select Date Range
        </Typography>
      </Box>
      <Formik
        initialValues={{
          startYear: selectedFilterValue.startYear,
          endYear: selectedFilterValue.endYear,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form style={{ padding: 10 }}>
            <div>
              <label>Start Date</label>
              <Field name="startYear">
                {({ field }) => (
                  <div>
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => {
                        formik.setFieldValue(field.name, date);
                        formik.setFieldValue('startYear', date);
                        formik.setFieldValue('endYear', date);
                        setSelectedFilterValue({
                          ...selectedFilterValue,
                          startYear: date,
                          endYear:date
                        });
                      }}
                      selectsStart
                      startYear={field.value}
                      endYear={formik.values.endYear}
                      dateFormat="dd/MM/yyyy"
                      showYearDropdown
                      showMonthDropdown
                      yearDropdownItemNumber={15}
                      renderCustomHeader={(props) => <CustomHeader {...props} />}
                      customInput={<TextField required style={{ width: '100%' }} />}
                      className="custom-date-picker"
                      calendarClassName="custom-date-picker-calendar" // Added class name for custom styling
                      popperPlacement="bottom-start"
                      wrapperClassName="custom-datepicker-wrapper" // Added class name for custom styling
                      calendarContainer={DatePickerWrapper} // Use styled component as the calendar container
                    />
                    {field.value && (
                      <button type="button" onClick={() => {
                        formik.setFieldValue('startYear',null)
                        formik.setFieldValue('endYear',null)
                        setSelectedFilterValue({...selectedFilterValue,startYear:null,endYear:null})
                      }}>
                        Clear
                      </button>
                    )}
                  </div>
                )}
              </Field>
              <ErrorMessage name="startYear" component="div" className="error" />
            </div>
            <div style={{ marginTop: '15px' }}>
              <label>End Date</label>
              <Field name="endYear">
                {({ field }) => (
                  <div>
                    <DatePicker
                      disabled={!selectedFilterValue.startYear}
                      selected={field.value}
                      onChange={(date) => {
                        formik.setFieldValue(field.name, date);
                        setSelectedFilterValue({
                          ...selectedFilterValue,
                          endYear: date,
                        });
                      }}
                      selectsEnd
                      startYear={formik.values.startYear}
                      endYear={field.value}
                      minDate={formik.values.startYear}
                      dateFormat="dd/MM/yyyy"
                      showYearDropdown
                      showMonthDropdown
                      yearDropdownItemNumber={15}
                      renderCustomHeader={(props) => <CustomHeader {...props} />}
                      customInput={<TextField required style={{ width: '100%' }} />}
                      className="custom-date-picker"
                      calendarClassName="custom-date-picker-calendar" // Added class name for custom styling
                      popperPlacement="bottom-start"
                      wrapperClassName="custom-datepicker-wrapper" // Added class name for custom styling
                      calendarContainer={DatePickerWrapper} // Use styled component as the calendar container
                    />
                    {field.value && (
                      <button type="button" onClick={() => {
                        formik.setFieldValue('endYear',null)
                        setSelectedFilterValue({...selectedFilterValue,endYear:null})
                      }}>
                        Clear
                      </button>
                    )}
                  </div>
                )}
              </Field>
              <ErrorMessage name="endYear" component="div" className="error" />
            </div>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }} mt={1}>
              <CustomButton type="submit" sx={{ width: '180px', display: 'none' }} m={1}>
                Apply Date
              </CustomButton>
            </Grid>
          </Form>
        )}
      </Formik>
    </ThemeProvider>
  );
}

CustomDateRange.propTypes = {
  selectedFilterValue: PropTypes.object.isRequired,
  setSelectedFilterValue: PropTypes.func.isRequired,
};

export default CustomDateRange;
