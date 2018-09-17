const responses = require("../models/responses");
const CustomerLibraryService = require("../services/CustomerLibrary.service");
const apiPrefix = "/api/customerLibrary";

module.exports = {
  getAll: getAll,
  post: post,
  put: put,
  deleteInfo: deleteInfo,
  readById: readById
};

function getAll(req, res) {
  CustomerLibraryService.getAll()
    .then(customers => {
      const responseModel = new responses.ItemsResponse();
      responseModel.items = customers;
      res.json(responseModel); // 200 Response
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(new responses.ErrorResponse(err));
    });
}

function post(req, res) {
  CustomerLibraryService.post(req.body)
    .then(id => {
      const responseModel = new responses.ItemResponse();
      responseModel.item = id;
      res
        .status(201)
        .location(`${apiPrefix}/${id}`)
        .json(responseModel);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(new responses.ErrorResponse(err));
    });
}

function put(req, res) {
  CustomerLibraryService.put(req.body)
    .then(info => {
      const responseModel = new responses.SuccessResponse();
      res.status(200).json(responseModel);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(new responses.ErrorResponse(err));
    });
}

function deleteInfo(req, res) {
  CustomerLibraryService.deleteInfo(req.params.id)
    .then(() => {
      const responseModel = new responses.SuccessResponse();
      res.status(200).json(responseModel);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(new responses.ErrorResponse(err));
    });
}

function readById(req, res) {
  CustomerLibraryService.readById(req.params.id)
    .then(tenant => {
      const responseModel = new responses.ItemResponse();
      responseModel.item = tenant;
      res.json(responseModel);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(new responses.ErrorResponse(err));
    });
}
