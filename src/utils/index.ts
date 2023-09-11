import axios from 'axios';

export const createPost = async (
  title: string,
  content: string,
  userId = "64f73c1fe89ea81197179326"
) => {
  type data = {
    title: string;
    content: string;
    userId: string;
  };
  const data: data = {
    title,
    content,
    userId,
  };

  const req = await axios.post("http://localhost:3000/api/createPost", {
    ...data,
  });

  const res = await req.data;

  return res;
};

export function convertDate(isoDate: string) {
  try {
    const dateObj = new Date(isoDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Add 1 to the month since it's 0-based
    const day = String(dateObj.getDate()).padStart(2, "0");
    const hours = dateObj.getHours();
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";

    const formattedHours = hours % 12 || 12; // Convert to 12-hour format

    return `${year}-${month}-${day} ${formattedHours}:${minutes}${ampm}`;
  } catch (error) {
    // Handle invalid date string
    console.error(error);
    return null;
  }
}
