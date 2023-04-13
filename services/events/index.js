module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'HI DAD!!!',
        input: event,
      },
      null,
      2
    ),
  };
};
