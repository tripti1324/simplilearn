"use server";

export async function submitRSVP(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    throw new Error("Email is required");
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Email: email,
        },
      }),
      cache: "no-store",
    }
  );

 if (!response.ok) {
  const errorText = await response.text();
  console.error("Airtable error:", errorText);
  throw new Error(errorText);
}


  return { success: true };
}
