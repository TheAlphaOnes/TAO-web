export async function getData() {
  const request = await fetch(
    "https://thealphaones.pythonanywhere.com/api/all-page"
  );

  const response = await request.json();
  if (!response) throw new Error("Something went wrong");

  return response;
}
