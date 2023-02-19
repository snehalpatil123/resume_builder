//Initial values declared  to the reducer

const initialSelectedTemplateState = {
  selectedTemplateId: null,
  selectedResumeId: null,
};

const initialPersonalInfoState = {
  personalInfo: {
    profileImg: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    objective: "",
  },
};

const initialWorkExperienceState = {
  experiences: [
    {
      id: 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    },
  ],
};

const initialEducationState = {
  educationInfo: {
    domain: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
};

const initialSkillsState = {
  skills: ["", "", ""],
};



// once action is dispatched from view reducer is triggered with the action to change state

export const selectedTemplateReducer = (
  state = initialSelectedTemplateState,
  action
) => {
  switch (action.type) {
    case action.SELECTTEMPLATE:
      return { ...state, selectedTemplateId: action.payload };
    case action.SELECTRESUME:
      return { ...state, selectedResumeId: action.payload };
    default:
      return state;
  }
};

export const personalInfoReducer = (
  state = initialPersonalInfoState,
  action
) => {
  switch (action.type) {
    case action.ADDPERSONALINFO:
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    default:
      return state;
  }
};

export const workExperienceReducer = (
  state = initialWorkExperienceState,
  action
) => {
  switch (action.type) {
    case action.ADDEXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    case action.ADDALLEXPERIENCE:
      return {
        ...state,
        experiences: action.payload,
      };
    default:
      return state;
  }
};

export const keySkillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case action.ADDNEWSKILLS:
      return { ...state, skills: [...state.skills, ""] };
    case action.EDITSKILL: {
      return {
        ...state,
        skills: action.payload,
      };
    }
    case action.DELETESKILL: {
      const newSkills = state.skills.filter(
        (skill, id) => id !== action.payload
      );

      return { ...state, skills: newSkills };
    }
    default:
      return state;
  }
};

export const educationDetailsReducer = (
  state = initialEducationState,
  action
) => {
  switch (action.type) {
    case action.ADDEDUCATION:
      return { ...state, educationInfo: action.payload };
    default:
      return state;
  }
};
