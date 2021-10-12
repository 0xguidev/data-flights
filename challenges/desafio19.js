db.voos.findOne(
    { litrosCombustivel: { $gt: 0 } },
    { _id: 0, vooId: 1 },
);