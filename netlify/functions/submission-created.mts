import type { Context } from "@netlify/functions";

const databaseUrl = Netlify.env.get("DATABASE_URL");
const supabaseServiceApiKey = Netlify.env.get("SUPABASE_SERVICE_API_KEY");

// Connect to our database
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(databaseUrl, supabaseServiceApiKey);

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
