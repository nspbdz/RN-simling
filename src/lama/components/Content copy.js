// import React, { createRef } from "react";
// import {useState,useRef} from "react";
// import { View, Text,TextInput, Button,TouchableOpacity } from "react-native";
// export default function Content(props) {
//   let [index, setIndex] = useState(-1);
//   const [data, setData] = useState([])
//   const [number, setNumber] = useState("");
// const refs=createRef();

//   const [amens,setAmens] = useState([])
//   const [val,setVal] = useState([])
//   const handleCheckboxChange = (event) => {

//      let newArray = [...amens, val];
//      if (amens.includes(val) )
//       {
//        newArray = newArray.filter(day => day !== val);
//      }
//      setAmens(
//        newArray
//      );
//      setVal("");
//    };
// console.log(amens)
// console.log(val)

//   const handleNumber = (event) => {
//     console.log(refs.current.state);
//     console.log(refs.current.state.value);
//       console.log(event.target)
//       console.log(event.target.div)
//     console.log(data);
//  };
// //   console.log(number)  
// // var value=1
//   return (
//   <>
//   <View 
//     style={{
//      flexDirection: "row",
//      paddingLeft:32,
//     }}
//     >
//      <View 
//      style={{
//      paddingRight:10,
//      paddingBottom:10,
     
//     }}
//      >
//       <TouchableOpacity  
//         id="1aa"
//       onPress={handleNumber => setVal("1")} 
//          style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
//       <Text  style={{textAlign:"center",fontSize:50}}>1</Text>
//       </TouchableOpacity>
//       </View>
      
//      <View 
//      style={{
//      paddingRight:10,
//     }}
//      >
//       <TouchableOpacity  onPress={handleNumber} 
//       style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
//       <div 
//       ref={refs} value="asdasd"
          
//           >
//       <Text  style={{textAlign:"center",fontSize:50}}>2</Text>

//       </div>
      
//       </TouchableOpacity>
//       </View>

//       <View 
//      style={{
//      paddingRight:10,
//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#930707" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>-</Text>
//       </TouchableOpacity>
//       </View>
//       <View 
//      style={{
//      paddingRight:10,
     
     
//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#930707" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>+</Text>
//       </TouchableOpacity>
//       </View> 
//     </View>
//     <View 
//     style={{
//       flexDirection: "row",
//      paddingLeft:32,

//      paddingBottom:10,

//     }}
//     >
//     <View 
//      style={{
//      paddingRight:10,
//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>3</Text>
//       </TouchableOpacity>
//       </View>
//      <View 
//      style={{
//      paddingRight:10,
//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>4</Text>
//       </TouchableOpacity>
//       </View>
//       <View 
//      style={{
//      paddingRight:10,
//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#930707" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>/</Text>
//       </TouchableOpacity>
//       </View>
//       <View 
//      style={{
//      paddingRight:10,
     
//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#930707" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>*</Text>
//       </TouchableOpacity>
//       </View> 
//     </View>
//     <View 
//     style={{
//       flexDirection: "row",
//      paddingLeft:32,

//     }}
//     >
//     <View 
//      style={{
//      paddingRight:10,
//      paddingBottom:10,

//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>5</Text>
//       </TouchableOpacity>
//       </View>
//      <View 
//      style={{
//      paddingRight:10,
//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>6</Text>
//       </TouchableOpacity>
//       </View>
//       <View 
//      style={{
//      paddingRight:10,
//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#930707" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>%</Text>
//       </TouchableOpacity>
//       </View>
//       <View 
//      style={{
//      paddingRight:10,
//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#930707" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>=</Text>
//       </TouchableOpacity>
//       </View> 
//     </View>
  

//     <View 
//     style={{
//       flexDirection: "row",
//      paddingLeft:32,

//     }}
//     >
//     <View 
//      style={{
//      paddingRight:10,
//      paddingBottom:10,

//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>7</Text>
//       </TouchableOpacity>
//       </View>
//      <View 
//      style={{
//      paddingRight:10,
//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>8</Text>
//       </TouchableOpacity>
//       </View>
//       <View 
//      style={{
//      paddingRight:10,
//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>9</Text>
//       </TouchableOpacity>
//       </View>
//       <View 
//      style={{
//      paddingRight:10,
//     }}
//      >
//       <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
//       <Text style={{textAlign:"center",fontSize:50}}>0</Text>
//       </TouchableOpacity>
//       </View> 
//     </View>
//   </>  
//   );
// }