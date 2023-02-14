import template_1 from "../Images/sample_1.jpg";
import template_2 from "../Images/sample_2.jpg";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";

export const templates = [
  {
    id: 1,
    template_name: "Template-1",
    template_img: template_1,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template-2",
    template_img: template_2,
    template: <Template2 />,
  },
  {
    id: 3,
    template_name: "Template-3",
    template_img: template_1,
    template: <Template3 />,
  },
    {
      id: 4,
      template_name: "Template-4",
      template_img: template_2,
      template: <Template4/>,
    },
];
