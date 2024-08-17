"use client"
import { Alert, Autocomplete, Button, Snackbar, TextField } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import React, { useEffect, useState } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form';


const coursesOptions = [
  { title: 'Computer Engineering' },
  { title: 'Civil Engineering' },
  { title: 'Robotics' },
  { title: 'Mechanical Engineering' },
  { title: 'Electronics' },
  { title: 'A.I Engineering' },
  { title: 'Autocad Software Learning' },
  { title: 'Solidworks Software Learning' },
  { title: 'Ansys Software Learning' },
  { title: 'Python Software Learning' },
  { title: 'Catia Software Learning' },
  { title: 'Matlab Software Learning' },
  // Add more course options here
];

const subjectOptions = [
  { title: 'Engineering Mathematics 1' },
  { title: 'Engineering Mathematics 2' },
  { title: 'Engineering Mathematics 3' },
  { title: 'Engineering Mathematics 4' },
  { title: 'Basic Mathematics' },
  { title: 'Applied Mathematics' },
  { title: 'Control Systems' },
  { title: 'Thermodynamics' },
  // Add more subject options here
];



const ContactForm = ({ course }) => {

  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      name: '',
      mobileNo: '',
      courses: course ? [{ title: course.replace(/-/g, ' ') }] : [], // Set default value for courses
      subject: []
    }
  });

  
const [snackbarOpen, setSnackbarOpen] = useState(false);
const [snackbarMessage, setSnackbarMessage] = useState('');
const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  // Watch the selected courses
  const selectedCourses = useWatch({ control, name: 'courses' });

  // Determine if any of the selected courses contain "Engineering" or is "Electronics"
  const shouldRenderSubject = selectedCourses.some(course =>
    course.title.includes("Engineering") || course.title === "Electronics" || course.title === "Robotics"
  );
  useEffect(() => {
    if (course) {
      setValue('courses', [{ title: course.replace(/-/g, ' ') }]);
    }
  }, [course, setValue]);



  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSnackbarMessage('Contact form submitted successfully!');
        setSnackbarSeverity('success');
      } else {
        setSnackbarMessage('Failed to submit form!');
        setSnackbarSeverity('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSnackbarMessage('An error occurred while submitting the form');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className='min-h-[800px] max-xl:min-h-[1000px] pb-5 container mx-auto w-full flex justify-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col pt-32 w-[80%] gap-8'>
        <div className="font-playfairSC font-bold text-4xl self-center mb-5">Contact Form</div>
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <TextField
              label="Name"
              variant="outlined"
              {...field}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 100px #fff inset',
                  WebkitTextFillColor: '#000',
                },
                '& input': {
                  fontFamily: 'Merriweather, serif',
                },
                '& label': {
                  fontFamily: 'Merriweather, serif',
                },

                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ca8a04', // Border color on focus
                    borderWidth: '2px',
                  },
                },

                '& .MuiFormLabel-root': {
                  color: 'black', // Default label color
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#ca8a04', // Label color on focus
                },

              }}
            />
          )}
        />
        <Controller
          name="mobileNo"
          control={control}
          rules={{
            required: 'Mobile number is required',
            validate: value => {
              // Remove country code and non-digit characters
              const cleanedValue = value.replace(/^\+\d{1,3}\s*/, '').replace(/\D/g, '');
              return cleanedValue.length === 10 || 'Mobile number must have exactly 10 digits';
            }
          }}
          render={({ field }) => (
            <MuiTelInput
              label="Mobile No"
              variant="outlined"
              defaultCountry="IN"  // Set default country to India
              {...field}
              error={!!errors.mobileNo}
              helperText={errors.mobileNo?.message}
              sx={{
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 100px #fff inset',
                  WebkitTextFillColor: '#000',
                },
                '& input': {
                  fontFamily: 'Merriweather, serif',
                },
                '& label': {
                  fontFamily: 'Merriweather, serif',
                },

                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ca8a04', // Border color on focus
                    borderWidth: '2px',
                  },
                },

                '& .MuiFormLabel-root': {
                  color: 'black', // Default label color
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#ca8a04', // Label color on focus
                },


              }}
            />
          )}
        />

        <Controller
          name="courses"
          control={control}
          rules={{ required: 'Course is required' }}
          render={({ field }) => (
            <Autocomplete
              multiple
              options={coursesOptions}
              getOptionLabel={(option) => option.title}
              value={field.value}
              onChange={(event, newValue) => {
                // Remove duplicates
                const uniqueValues = newValue.filter((option, index) =>
                  newValue.findIndex(item => item.title === option.title) === index
                );
                field.onChange(uniqueValues);
              }}
              isOptionEqualToValue={(option, value) => option.title === value.title}
              sx={
                {
                  '& input': {
                    fontFamily: 'Merriweather, serif',
                  },
                  '& label': {
                    fontFamily: 'Merriweather, serif',
                  },
                  '& .MuiFormLabel-root': {
                    color: 'black', // Default label color
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: '#ca8a04', // Label color on focus
                  },
                  '& .MuiAutocomplete-tag': {
                    backgroundColor: 'black', // Background color of the chip
                    color: 'white', // Text color of the chip
                    border: '2px solid',
                    borderColor: '#ca8a04', // Border color of the chip
                  },
                  '& .MuiAutocomplete-tag .MuiChip-deleteIcon': {
                    color: '#ca8a04', // Cancel button color
                    '&:hover': {
                      color: '#ca8a04', // Ensure cancel button remains yellow on hover
                    },
                  },
                }
              }

              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Courses"
                  variant="outlined"
                  error={!!errors.courses}
                  helperText={errors.courses?.message}
                  sx={{
                    '& input': {
                      fontFamily: 'Merriweather, serif',
                    },
                    '& label': {
                      fontFamily: 'Merriweather, serif',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'black', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'black', // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#ca8a04', // Border color on focus
                        borderWidth: '2px',
                      },
                    },

                    '& .MuiFormLabel-root': {
                      color: 'black', // Default label color
                    },
                    '& .MuiFormLabel-root.Mui-focused': {
                      color: '#ca8a04', // Label color on focus
                    },

                  }}
                />
              )}
            />
          )}
        />
       {/* Conditionally render the subject input */}
       { shouldRenderSubject && (
          <Controller
            name="subject"
            control={control}
            rules={{ required: 'Subject is required' }}
            render={({ field }) => (
              <Autocomplete
                multiple
                freeSolo
                options={subjectOptions}
                getOptionLabel={(option) => typeof option === 'string' ? option : option.title}
                value={field.value}
                onChange={(event, newValue) => {
                  // Handle the case where the input is a freeSolo string
                  const processedValues = newValue.map((item) =>
                    typeof item === 'string' ? { title: item } : item
                  );

                  // Remove duplicates
                  const uniqueValues = processedValues.filter((option, index) =>
                    processedValues.findIndex(item => item.title === option.title) === index
                  );
                  field.onChange(uniqueValues);
                }}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                sx={{
                  '& input': {
                    fontFamily: 'Merriweather, serif',
                  },
                  '& label': {
                    fontFamily: 'Merriweather, serif',
                  },
                  '& .MuiFormLabel-root': {
                    color: 'black', // Default label color
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: '#ca8a04', // Label color on focus
                  },
                  '& .MuiAutocomplete-tag': {
                    backgroundColor: 'black', // Background color of the chip
                    color: 'white', // Text color of the chip
                    border: '2px solid',
                    borderColor: '#ca8a04', // Border color of the chip
                  },
                  '& .MuiAutocomplete-tag .MuiChip-deleteIcon': {
                    color: '#ca8a04', // Cancel button color
                    '&:hover': {
                      color: '#ca8a04', // Ensure cancel button remains yellow on hover
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Subjects"
                    variant="outlined"
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                    sx={{
                      '& input': {
                        fontFamily: 'Merriweather, serif',
                      },
                      '& label': {
                        fontFamily: 'Merriweather, serif',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'black', // Default border color
                        },
                        '&:hover fieldset': {
                          borderColor: 'black', // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#ca8a04', // Border color on focus
                          borderWidth: '2px',
                        },
                      },
                      '& .MuiFormLabel-root': {
                        color: 'black', // Default label color
                      },
                      '& .MuiFormLabel-root.Mui-focused': {
                        color: '#ca8a04', // Label color on focus
                      },
                    }}
                  />
                )}
              />
            )}
          />
        )}
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'black', // Background color on hover
            color: 'white', // Text color on hover
            border: '2px solid #ca8a04', // Button border color
            '&:hover': {
              backgroundColor: '#ca8a04', // Button background color
              color: 'white', // Button text color
              borderColor: 'black', // Button border color
            },
            fontFamily: 'Merriweather, serif'
          }}
          type='submit'
        >
          Submit
        </Button>
      </form>
        {/* Snackbar for alert messages */}
        <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default ContactForm