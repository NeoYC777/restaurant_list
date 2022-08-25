// Include express
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const port = 3000

// 設定路由和請求回覆
app.get('/',(req, res) =>{
  res.render('index', { restaurants: restaurantList.results })
})
app.use(express.static('public'))

// 動態路由資訊頁面
app.get('/restaurants/:restaurant_id', (req, res)=>{
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)  
  res.render('show', { restaurant})
})

// 搜尋功能
app.get('/search', (req, res)=>{
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase()) || restaurant.location.toLowerCase().includes(keyword.toLowerCase())
  })
  if (restaurants.length === 0 && keyword.length !== 0) {
    res.render('noResult', { keyword })
    return
  } else {
  res.render('index', { restaurants ,keyword })
  }
})

// 指定樣版引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// 監聽和啟動伺服器
app.listen(port, () =>{
  console.log(`Express is running on http://localhost:${port}`)
})