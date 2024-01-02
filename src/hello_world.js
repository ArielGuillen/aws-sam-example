
exports.lambdaHandler = async (event) => {
  if (event.httpMethod !== "GET")
    throw new Error(
      `This route only accept GET method, you tried: ${event.httpMethod}`
    );

  //create the response object
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" }),
  };

  return response;
};
