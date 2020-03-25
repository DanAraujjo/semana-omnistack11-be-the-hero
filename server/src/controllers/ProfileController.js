const database = require("../database");

module.exports = {
  async index(request, response) {
    const id_ong = request.headers.authorization;

    const incidents = await database("incidents")
      .where("id_ong", id_ong)
      .select("*");

    return response.json(incidents);
  }
};
