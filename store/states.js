const states = () => ({
  isDarkTheme: false,
  steps: [
    {
      sliderVal: 0,
      title: 'Personal<br> Details',
      subtitle:
        'Please complete your personal details section by clicking complete.',
    },
    {
      sliderVal: 3,
      title: 'More About<br> You',
      subtitle: 'Just upload your cover letter to complete this section.',
    },
    {
      sliderVal: 5,
      title: 'Files <br> Upload',
      subtitle: 'Just upload your cover letter to complete this section.',
    },
  ],
  formFields: {
    first_name: {
      title: 'First name',
      value: '',
      required: true,
    },
    last_name: {
      title: 'Last name',
      value: '',
      required: false,
    },
    email: {
      title: 'Email',
      value: '',
      required: true,
    },
    phone_number: {
      title: 'Phone number',
      value: '',
      required: false,
    },
    live_in_uk: {
      title: 'Do you live in the uk?',
      value: '',
      required: true,
    },
    git_profile: {
      title: 'Git profile',
      value: '',
      required: true,
    },
    cv: {
      title: 'Upload CV',
      value: null,
      required: true,
    },
    cover_letter: {
      title: 'Upload Cover Letter',
      value: null,
      required: false,
    },
    about_you: {
      title: 'About you',
      value: '',
      required: true,
    },
  },
})
export default states
