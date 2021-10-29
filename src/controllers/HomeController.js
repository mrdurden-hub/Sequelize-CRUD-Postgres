class HomeController {
  index(req, res) {
    res.json({
      message: 'Hello World',
    });
  }
}

module.exports = new HomeController();
