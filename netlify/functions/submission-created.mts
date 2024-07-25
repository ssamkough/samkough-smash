import type { Context } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

const databaseUrl = Netlify.env.get("DATABASE_URL") ?? "";
const supabaseServiceApiKey = Netlify.env.get("SUPABASE_SERVICE_API_KEY") ?? "";

// Connect to our database
const supabase = createClient(databaseUrl, supabaseServiceApiKey);

export default async (request: Request, context: Context) => {
  console.log("request", request);

  // Insert a row
  const { data, error } = await supabase
    .from("person")
    .insert([{ first_name: "I need to not forget this" }]);

  // Did it work?
  console.log(data, error);
};
