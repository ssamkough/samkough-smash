import type { Context } from "@netlify/functions";

require("dotenv").config();
const { DATABASE_URL, SUPABASE_SERVICE_API_KEY } = process.env;

// Connect to our database
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

export default async (request: Request, context: Context) => {
  const { body } = request;
  console.log("body", body);

  // Insert a row
  const { data, error } = await supabase
    .from("person")
    .insert([{ first_name: "I need to not forget this" }]);

  // Did it work?
  console.log(data, error);
};

export const config = {
  path: "/success",
};
