module.exports.handler = async (event) => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'HI MOM!!!!!!',
      input: event,
    },
    null,
    2,
  ),
});
