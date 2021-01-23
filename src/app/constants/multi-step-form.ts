const COUNTRY_LIST = [
  { name: "United States of America", code: "us" },
  { name: "United Kingdoms", code: "gb" },
  { name: "India", code: "in" }
];
// get countries dynamically from API

const is_required = true;

const DATA_STEP_1 = {
  salutation: {
    type: "select",
    options: [{ name: "Ms" }, { name: "Mr" }, { name: "Mrs" }],
    validations: {
      required: is_required
    },
    errors: {},
    placeholder: "Salutation"
  },
  firstName: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: {
      required: "First Name cannot be left blank",
      minlength: "Minimum length 2",
      maxlength: "Maximum length 30"
    },
    placeholder: "First Name"
  },
  middleName: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: {
      required: "Middle Name cannot be left blank",
      minlength: "Minimum length 2",
      maxlength: "Maximum length 30"
    },
    placeholder: "Middle name"
  },
  lastName: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: { required: "Last Name cannot be left blank" },
    placeholder: "Last Name"
  },
  houseNumber: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: { required: "House Number cannot be left blank" },
    placeholder: "House Number"
  },
  streetName: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: { required: "Street Name cannot be left blank" },
    placeholder: "Street Name"
  },
  area: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: { required: "Area cannot be left blank" },
    placeholder: "Area"
  },
  city: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: { required: "City cannot be left blank" },
    placeholder: "City"
  },
  state: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: { required: "State cannot be left blank" },
    placeholder: "State"
  },
  country: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: { required: "Country cannot be left blank" },
    placeholder: "Country"
  },
  landmark: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: { required: "Landmark cannot be left blank" },
    placeholder: "Landmark"
  },
  phoneNumber: {
    type: "phone",
    validations: {
      required: is_required,
      pattern: /^\d{10}$/
    },
    errors: { required: "Phone Number cannot be left blank" },
    placeholder: "Phone Number"
  },
  alternatePhoneNumber: {
    type: "phone",
    validations: {
      required: is_required,
      pattern: /^\d{10}$/
    },
    errors: { required: "Alternate Phone Number cannot be left blank" },
    placeholder: "Phone Number"
  },
  email: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: { required: "Email cannot be left blank" },
    placeholder: "Email"
  },
  alternateEmail: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: { required: "Alternate Email cannot be left blank" },
    placeholder: "Alternate Email"
  },
  fax: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Fax"
  },
  IndividualOrOrganisation: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: { required: "This field cannot be left blank" },
    placeholder: "Individual Or Organisation"
  },
  taxId: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: {},
    placeholder: "Tax Id"
  },
  password: {
    type: "text",
    validations: {
      required: is_required
    },
    errors: {},
    placeholder: "Password"
  }
};

const DATA_STEP_2 = {
  licenseNumber: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "License Number"
  },
  RegisteredName: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Registered Name"
  },
  ownershipDetails: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Ownership Details"
  }
};

const DATA_STEP_3 = {
  IdentityAadharOrOrganisationCertificate: {
    type: "file",
    validations: {},
    errors: {},
    placeholder: "Upload Aadhaar/Organisation Certificate"
  },
  TaxId: {
    type: "file",
    validations: {},
    errors: {},
    placeholder: "Upload tax ID document"
  }
};

const DATA_STEP_4 = {
  accountNumber: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Account Number"
  },
  BankIfscCode: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Bank IFSC Code"
  },
  alternateAccountNumber: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Alternate Account Number"
  },
  IfscCodeForAlternateAccount: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Alternate IFSC Code"
  },
  nomineeName: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Nominee Name"
  },
  NomineeRelation: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Nominee Relation"
  },
  NomineeContactNumber: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Nominee Contact Number"
  },
  NomineeEmail: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Nominee Email"
  },
  NomineeAddress: {
    type: "textarea",
    validations: {},
    errors: {},
    placeholder: "Nominee Addess"
  }
};

const DATA_STEP_5 = {
  experienceDetails: {
    type: "textarea",
    validations: {},
    errors: {},
    placeholder: "Experience Details"
  },
  UploadWorkDetails: {
    type: "file",
    validations: {},
    errors: {},
    placeholder: "Upload work Details"
  }
};

const DATA_STEP_6 = {};

const STEP_ITEMS = [
  { label: "Basic Details", data: DATA_STEP_1 },
  { label: "Organisational Details", data: DATA_STEP_2 },
  { label: "Upload ID Documents", data: DATA_STEP_3 },
  { label: "Account Details", data: DATA_STEP_4 },
  { label: "Experience Details", data: DATA_STEP_5 },
  { label: "Schedule Your Inspection", data: DATA_STEP_6 },
  { label: "Review & Submit", data: {} }
];

export { STEP_ITEMS };
