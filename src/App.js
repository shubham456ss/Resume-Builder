import React, {useState, useEffect, useRef} from "react";
import './static/outer.css'
import Navbar from './components/Navbar';
import jsPDF from 'jspdf';
import { Route, BrowserRouter, Routes } from "react-router-dom"; 
import mydata from './components/MyData.json';
import  "./static/App.css";
import Layout from "./components/Layout";
import JobShown from "./components/JobShown";
import Notfound from './components/Notfound';


let nextId=1;
const initialTodos =[
    {
        id: 0,
        title: 'Type Skills',
    },
]; 
    

let nextLangId=3;
const LanguageList = [
    {
        id: 0,
        title: 'Hindi',

    }, {
        id: 1,
        title: 'Marathi',
    
    }, {
        id: 2,
        title: 'English',
    },
];
let nextEduId=1;
const EducationList = [
    {
        id: 0,
        title: 'hsc abc',
    }
];

// const Jobs = 
//     {
//         title: 'Radio',
//         arr:[],
//     }

let nextemphistid=3;
const EmpList = [
    {
        id: 0,
        work: 'Web Developer',

    }
];

export function App() {
    
        // let initTodo;

        // if (localStorage.getItem("myObject") === null) {
        //     initTodo = [];
        // }
        // else {
        //     initTodo = JSON.parse(localStorage.getItem("myObject"));
        // }

    const [firstname, setFirstname] = useState('firstname')
    const [lastname, setLastname] = useState('lastname')
    const [email, setEmail] = useState('email@gmail.com')
    const [phone, setPhone] = useState(976543210)
    const [occupation, setOccupation] = useState('Occupation')
    const [country, setCountry] = useState('Country')
    const [city, setCity] = useState('Thane')
    const [address, setAddress] = useState('Ulhasnagar-2')
    const [postal, setPostal] = useState(421002)
    const [profile, setProfile] = useState('Profile Summary')
    const [skill1, setSkill1] = useState('About Skills')
    const [lang , setLang] = useState('')
    const [jobTitle,setJobTitle] = useState({ttl:''})
    const [jobList,setJobList] = useState(initialTodos)

    const [empHistory,setEmpHistory] =useState(EmpList);
    const [empTitle, setEmpTitle] =useState('');

    const [imgSrc, setImgSrc] = useState('');
    const [todos, setTodos] = useState(initialTodos);
    const [langList,setLangList] = useState(LanguageList);
    const [education,setEducation] = useState('');
    const [eduList,setEduList]= useState(EducationList);
    const [image, setImage] = useState(null);
    const reportTemplateRef = useRef(null);

    const [filt,setFilt] = useState([]);  

    
     
  useEffect(()=>{  

        setFilt(mydata.filter(val=>
            val.skill === jobTitle.ttl
        ))
    },[jobTitle])
    
    
    function onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    function handleAddTodo(title) { // this func is for adding skills
        
       setJobTitle({ttl:title})
    
        setTodos([
            ...todos, {
                id: nextId++,
                title: title,
            }
        ]);
    }
  
    function handleAddEdu(title) {
        setEduList([
            ...eduList, {
                id: nextEduId++,
                title: title,
            }
        ]);
    }


    function handleAddLanguage(title) {
    setLangList([
            ...langList, {
                id: nextLangId++,
                title: title,
            }
        ]);
  }
 


  function handleAddEmp(title , work) {

    setEmpTitle(title);
        
    setEmpHistory([
            ...empHistory, {
                id: nextemphistid++,
                work: work,
            }
        ]);
  }


    function handleDeleteTodo(todoId) {

        setTodos(todos.filter(l => l.id !== todoId));

    // console.log("deleted")
    // localStorage.setItem("myObject", JSON.stringify(objSetData));
    // localStorage.setItem("myObject", JSON.stringify(todos));
    }

    function handleDeleteLanguage(langId) {
        setLangList(langList.filter(l => l.id !== langId));
    }

    function handleDeleteEdu(eduId) {
        setEduList(eduList.filter(e => e.id !== eduId));
    }

    function handleDeleteEmp(empId) {
        setEmpHistory(empHistory.filter(e => e.id !== empId));

    }


    function handleGeneratePdf() {
        const doc = new jsPDF({format: 'a3', unit: 'px',});

        doc.html(reportTemplateRef.current,{
            async callback(doc) {
                await doc.save('document');
            }
        });
    }

    const objSetData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        occupation: occupation,
        country:country,
        city:city,
        address:address,
        postal:postal,
        profile: profile,
        skill1: skill1,
        todos: todos,
        imgSrc: imgSrc,
        image: image,
        lang:lang,
        langList:langList,
        eduList:eduList,
        edu:education,
        jobTitle:jobTitle,
        jobList:jobList,
        empHistory:empHistory,
        empTitle:empTitle,
    }
    const objGetData = {

        setFirstname: setFirstname,
        setLastname: setLastname,
        setEmail: setEmail,
        setPhone: setPhone,
        setJobTitle:setJobTitle,
        setJobList:setJobList,
        setCountry:setCountry,
        setCity:setCity,
        setAddress:setAddress,
        setPostal:setPostal,
        setOccupation: setOccupation,
        setProfile: setProfile,
        setSkill1: setSkill1,
        setLang:setLang,
        setLangList:setLangList,
        handleDeleteTodo: handleDeleteTodo,
        handleAddTodo: handleAddTodo,
        handleDeleteLanguage:handleDeleteLanguage,
        handleAddLanguage:handleAddLanguage,
        setTodos: setTodos,
        setImgSrc: setImgSrc,
        onImageChange: onImageChange,
        setImage: setImage,
        setEdu:setEducation,
        setEduList:setEduList,
        setEmpHistory:setEmpHistory,
        setEmpTitle:setEmpTitle,
        ref: reportTemplateRef,
        handleGeneratePdf: handleGeneratePdf,
        handleAddEdu:handleAddEdu,
        handleDeleteEdu:handleDeleteEdu,
        handleDeleteEmp:handleDeleteEmp,
        handleAddEmp:handleAddEmp,
        
    }

    // useEffect(() => {
    //     localStorage.setItem("myObject", JSON.stringify(objGetData));
    //     localStorage.setItem("myObject2", JSON.stringify(objSetData));
    //   }, [objSetData])

    return (
        <BrowserRouter> 
            <Navbar  myDatas={filt}/>
        
                <Routes>
                    <Route exact path='/' element={<Layout objSetData={objSetData} objGetData={objGetData} filt={filt}/> } ></Route>
                    <Route exact path='/job' element={<JobShown myDatas={filt} />}></Route>
                    <Route path='*' element={<Notfound />}></Route>
                </Routes> 
       </BrowserRouter> 
    )
}

export default App;
