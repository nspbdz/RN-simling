import React from "react";
import data from "../../data";
import {useState,useContext,useEffect} from "react"
import { View,StyleSheet, Text,TextInput, Button,TouchableOpacity,FlatList } from "react-native";

const Content = (props) => {
  // const activeSlideRef = useRef(null);
  const [btnVal, setbtnVal] = useState([]);
  const [operat, setOperat] = useState([]);
  const [btnVal1, setbtnVal1] = useState([]);
  const data=[ 
    {  id: '1' },  {  id: '2' },  {  id: '3' },
  {  id: '4' },  {  id: '5' },  { id: '6' }, 
   {  id: '7' },  {  id: '8' },  {  id: '9' },  
   {  id: '0' }
]
 
  const setStateHandler = (id) => {
    console.log(id)
    // console.log(event.nativeEvent.target.innerText)
    // console.log(event.nativeEvent)

    let newArray = [...btnVal, id];
    if (btnVal.includes(id) )
      console.log(newArray)
       
    setbtnVal(
        newArray
    );
      };
    const datass=btnVal.toString()
    const dataSplit=datass.replace(/\,/g,'');
    // a=a.replace(/\,/g,'');
      console.log(dataSplit)
      console.log(btnVal)

    const  handleOperat = (event) =>{
      console.log(event.target.id)
      const oprt=event.target.id
      setOperat(oprt)
      setbtnVal1(dataSplit)
      setbtnVal("")

    }
      console.log(operat)
      console.log(btnVal)
      const  handleResult = (event) =>{

        
        if(operat=="*"){
          console.log("perkalian")
        const res=btnVal1 * dataSplit
        setbtnVal(res)

        }
        if(operat=="/"){
          console.log("pembagian")
        const res=btnVal1 / dataSplit
        setbtnVal(res)

        }
        if(operat=="+"){
          console.log("tambah")
        const res=btnVal1 + dataSplit
        setbtnVal(res)

        }
        
      }
  return (
    <>
    <View>
      <Text>apapap</Text>
      <TextInput  value={dataSplit} placeholder="klik disni"></TextInput>
    </View>

    <View  style={styles.container}
        >
      
      <FlatList 
        numColumns={4}
        keyExtractor={(item) => item.id} 
        data={data} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setStateHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>

          </TouchableOpacity>
        )}
      />


</View>
</>
  
  // <> 
  // <View>
  //     <TextInput style={{marginTop:"20px",backgroundColor:"#ECECEC",width:"270px", height :"90px"}} maxLength={40} value={dataSplit}>
  //     </TextInput>
  // </View>
  // <View 
  //   style={{
  //    flexDirection: "row",
  //    paddingLeft:32,
  //   }}
  //   >
        
  //    <View 
  //    style={{
  //    paddingRight:10,
  //    paddingBottom:10,
     
  //   }}
  //    >
         
  //     <TouchableOpacity  
  //     onPress={setStateHandler} 
  //        style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
  //     <Text  style={{textAlign:"center",fontSize:50}}>1</Text>
  //     </TouchableOpacity>
  //     </View>
      
  //    <View 
  //    style={{
  //    paddingRight:10,
  //   }}
  //    >
  //     <TouchableOpacity  onPress={setStateHandler} 
  //     style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
  //     <div 
      
          
  //         >
  //     <Text  style={{textAlign:"center",fontSize:50}}>2</Text>

  //     </div>
      
  //     </TouchableOpacity>
  //     </View>

  //     <View 
  //    style={{
  //    paddingRight:10,
  //   }}
  //    >
  //     <TouchableOpacity  style={{ height: 80,width:80,  backgroundColor:"#930707" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>-</Text>
  //     </TouchableOpacity>
  //     </View>
  //     <View 
  //    style={{
  //    paddingRight:10,
     
     
  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#930707" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>+</Text>
  //     </TouchableOpacity>
  //     </View> 
  //   </View>
  //   <View 
  //   style={{
  //     flexDirection: "row",
  //    paddingLeft:32,

  //    paddingBottom:10,

  //   }}
  //   >
  //   <View 
  //    style={{
  //    paddingRight:10,
  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>3</Text>
  //     </TouchableOpacity>
  //     </View>
  //    <View 
  //    style={{
  //    paddingRight:10,
  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>4</Text>
  //     </TouchableOpacity>
  //     </View>
  //     <View 
  //    style={{
  //    paddingRight:10,
  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#930707" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>/</Text>
  //     </TouchableOpacity>
  //     </View>
  //     <View 
  //    style={{
  //    paddingRight:10,
     
  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#930707" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>*</Text>
  //     </TouchableOpacity>
  //     </View> 
  //   </View>
  //   <View 
  //   style={{
  //     flexDirection: "row",
  //    paddingLeft:32,

  //   }}
  //   >
  //   <View 
  //    style={{
  //    paddingRight:10,
  //    paddingBottom:10,

  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>5</Text>
  //     </TouchableOpacity>
  //     </View>
  //    <View 
  //    style={{
  //    paddingRight:10,
  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>6</Text>
  //     </TouchableOpacity>
  //     </View>
  //     <View 
  //    style={{
  //    paddingRight:10,
  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#930707" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>%</Text>
  //     </TouchableOpacity>
  //     </View>
  //     <View 
  //    style={{
  //    paddingRight:10,
  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#930707" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>=</Text>
  //     </TouchableOpacity>
  //     </View> 
  //   </View>
  

  //   <View 
  //   style={{
  //     flexDirection: "row",
  //    paddingLeft:32,

  //   }}
  //   >
  //   <View 
  //    style={{
  //    paddingRight:10,
  //    paddingBottom:10,

  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>7</Text>
  //     </TouchableOpacity>
  //     </View>
  //    <View 
  //    style={{
  //    paddingRight:10,
  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>8</Text>
  //     </TouchableOpacity>
  //     </View>
  //     <View 
  //    style={{
  //    paddingRight:10,
  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>9</Text>
  //     </TouchableOpacity>
  //     </View>
  //     <View 
  //    style={{
  //    paddingRight:10,
  //   }}
  //    >
  //     <TouchableOpacity style={{ height: 80,width:80,  backgroundColor:"#FF5757" }}>
  //     <Text style={{textAlign:"center",fontSize:50}}>0</Text>
  //     </TouchableOpacity>
  //     </View> 
  //   </View>
  // </>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
export default Content