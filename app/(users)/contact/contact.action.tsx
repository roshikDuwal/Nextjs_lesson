"use server";
export const contactAction = async (formData: any) => {
  console.log("formdata", formData.get("fullName"));
};
 