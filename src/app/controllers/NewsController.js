
class NewsController{
    // [GET] /news
    index(req,res){
        res.render('news');
    }

    // [GET] /news/....
    show(req,res){
        res.send('new deatails')
    }
}
module.exports = new NewsController;