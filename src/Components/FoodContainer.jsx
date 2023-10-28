import React from 'react' 
import FoodCart from './FoodCart'
import { useDispatch } from 'react-redux'


const FoodContainer = () => {

  

  const data =[
    {
      id : crypto.randomUUID(),
      image : "https://vaya.in/recipes/wp-content/uploads/2018/03/Aloo-Paratha.jpg",
      title: "Aalu's paratha",
      Prize : "120",
      Rating : "₹ 120",
      count :"1"
 },
    {
      id : crypto.randomUUID(),
      image : "https://media.istockphoto.com/id/1189080997/photo/aloo-paratha-with-lassi-indian-potato-stuffed-flatbread-with-butter-on-top-served-with-fresh.jpg?s=612x612&w=0&k=20&c=WcFqQX9OCVbgpH9dGGF5Ln7otnFD4inGvmMOIy5GhcE=",
      title: "Dal ka parahta",
      Prize : "100",
      Rating : "₹ 100",
      count :1
 },
    {
      id : crypto.randomUUID(),
      image : "https://media.istockphoto.com/id/1279134622/photo/image-of-metal-tray-with-aloo-paratha-pile-topped-with-red-onion-rings-and-sprinkle-of.jpg?s=612x612&w=0&k=20&c=qLee_GMpPHzcCVfkNWmMdJPjlIpxsklN_bMwlhQS7rM=",
      title: "Regular paratha",
      Prize : "60",
      Rating : "₹ 100",
      count : 1
 },
    {
      id : crypto.randomUUID(),
      image : "https://static.toiimg.com/thumb/59320716.cms?width=1200&height=900",
      title: "Palak ka paratha",
      Prize : "120",
      Rating : "₹ 100",
      count :1
 },
    {
      id : crypto.randomUUID(),
      image : "https://media.gettyimages.com/id/513454318/photo/the-egg-curry-with-ceylon-parantha-is-photographed-at-curry-leaf-october-26-2015-in-laurel-md.jpg?s=612x612&w=0&k=20&c=I0loXXLjOBMb1KU5aWmN3SMxqurJLqx9n479CZ87hCs=",
      title: "Lachedar Paratha",
      Prize : "120",
      Rating : "₹ 120",
      count :1

 },
    {
      id : crypto.randomUUID(),
      image : "https://images.herzindagi.info/image/2022/Dec/veg-paratha-recipes-in-hindi.jpg",
      title: "Chees Paratha",
      Prize : "200",
      Rating : "₹ 100",
      count : 1
 },
    {
      id : crypto.randomUUID(),
      image : "https://media.istockphoto.com/id/520961869/photo/vegetable-paratha-1.jpg?s=612x612&w=0&k=20&c=t4h_E3Gm8631Dng6SkXWLxPFsG-65BtKxPEOSwWx0NA=",
      title: "Tanduri Paratha",
      Prize : "140",
      Rating : "₹ 100",
      count : 1
 },
    {
      id : crypto.randomUUID(),
      image : "https://1.bp.blogspot.com/-E2Ct2YHsGg4/X_yK7WbCV-I/AAAAAAAACic/F1v7Uy00i_cGmDa5iVzg89nA5JD3_vEuQCLcBGAsYHQ/w1200-h630-p-k-no-nu/dhaba-paneer-paratha.JPG",
      title: "Dhabha Paneer paratha",
      Prize : "60", 
      Rating : "₹ 60",
      count : 1

 },
    {
      id : crypto.randomUUID(),
      image : "https://s2.dmcdn.net/v/UON5R1ZSJ8FRZVydd/x1080",
      title: "New Onion Lachedar Crispy Paratha",
      Prize : "180",
      Rating : "₹ 180",
      count : 1
 },
    {
      id : crypto.randomUUID(),
      image : "https://www.rewariyasat.com/h-upload/2022/04/22/1600x960_26069-dahi-paratha-recipe-in-hindi.jpg",
      title: "Dahi parathe",
      Prize : "100",
      Rating : "₹ 100",
      count : 1
 },
    {
      id : crypto.randomUUID(),
      image : "https://t1.uc.ltmcdn.com/en/posts/1/8/7/how_to_make_gobi_paratha_4781_orig.jpg",
      title: "Gobhi ka paratha",
      Prize : "80",
      Rating : "₹ 80",
      count : 1
 },
    {
      id : crypto.randomUUID(),
      image : "https://images.news18.com/ibnkhabar/uploads/2020/12/paratha.jpg?im=FitAndFill,width=1200,height=900",
      title: "Mungdal ka paratha",
      Prize : "110",
      Rating : "₹ 110",
      count : 1
 },
    {
      id : crypto.randomUUID(),
      image : "https://media.gettyimages.com/id/676294571/photo/indian-food.jpg?s=612x612&w=0&k=20&c=UAcZ11oPIbnwX-BzRxKaGhv7oUfFT-6vWDlvIn01nQs=",
      title: "Lachedar chees paratha",
      Prize : "180",
      Rating : "₹ 180",
      count : 1
 },
    {
      id : crypto.randomUUID(),
      image : "https://media.gettyimages.com/id/1392580653/photo/potato-fries-kathi-roll.jpg?s=612x612&w=0&k=20&c=Lm7FsucoNnV3SeJusa___rMSbpDkUYU4m6UuiQH-zjo=",
      title: "Lifafa Paneer paratha",
      Prize : "200",
      Rating : "₹ 200",
      count : 1
 },
    {
      id : crypto.randomUUID(),
      image : "https://media.gettyimages.com/id/1334105078/photo/stuffed-paranthas-with-butter-topping-served-with-pickle-and-chutney.jpg?s=612x612&w=0&k=20&c=IyM3mKQLMQRLlp87KCfc5S7Sb1fmLkeUvmWFxR1HKPY=",
      title: "Multigrain methi paratha",
      Prize : "50",
      Rating : "₹ 50",
      count : 1
 },
    {
      id : crypto.randomUUID(),
      image : "https://media.gettyimages.com/id/512245560/photo/picture-showing-special-lucknowi-bengali-dish-named-ghutwan-kabab-with-paratha-served-with.jpg?s=612x612&w=0&k=20&c=k-tH7ChcTcMQm53u5a6t-CVSxSzJZP-w4tP5JCXdmeo=",
      title: "Jwar vegetable paratha",
      Prize : "120",
      Rating : "₹ 120",
      count : 1
 },
   

  ]

  return (
    <>
      <h1 className="all-Food-title">All Food</h1>
    <div className="Container">

{
  data.map(data => <FoodCart key={data.id} data={data}/>)
  
}

    </div>
    </>
  )
 }


export default FoodContainer