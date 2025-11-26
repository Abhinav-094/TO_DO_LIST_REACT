import { useState ,useEffect} from "react";
import "./To_do.css";
import List from "./List";
function To_do()
{

    const [submit_disabled , set_submit_disabled] = useState(true);
    const [name_msg , set_name_msg] = useState("PLS ENTER YOUR NAME")
    const [name_msg_color , set_name_msg_color] = useState("red");
    const [email_msg, set_email_msg] = useState("PLS ENTER YOUR EMAIL");
    const [email_msg_color, set_email_msg_color] = useState("red");
    const [pass_msg, set_pass_msg] = useState("PLS ENTER YOUR PASSWORD");
    const [pass_msg_color, set_pass_msg_color] = useState("red");
    const [gender_msg, set_gender_msg] = useState("PLS SELECT YOUR GENDER");
    const [gender_msg_color, set_gender_msg_color] = useState("red");  
    const [city_msg, set_city_msg] = useState("PLS SELECT YOUR CITY");
    const [city_msg_color, set_city_msg_color] = useState("red");
    const [Hobbies_msg, set_Hobbies_msg] = useState("PLS SELECT YOUR HOBBIES");
    const [Hobbies_msg_color, set_Hobbies_msg_color] = useState("red");
    const[hobbycount , sethobbycount] = useState(0)

    
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [pass, setPass] = useState(false);
    const [gender, setGender] = useState(false);
    const [city, setCity] = useState(false);
    const [hobby, setHobby] = useState(false);


      const [name_data, setName_data] = useState("");
      const [email_data, setEmail_data] = useState("");
      const [pass_data, setPass_data] = useState("");
      const [gender_data, setGender_data] = useState("");
      const [city_data, setCity_data] = useState("");
      const [hobby_data, setHobby_data] = useState([]);


      const [show_table , set_show_table] = useState(false);

      const [records , set_records] = useState([]);
    





  useEffect(() => {
    if (name && email && pass && gender && city && hobby) {
      set_submit_disabled(false);
    } else {
      set_submit_disabled(true);
    }
  }, [name, email, pass, gender, city, hobby]);

   useEffect(() => {
     if (hobbycount > 0) {
         set_Hobbies_msg("HOBBY SELECTED ✅ ");
         set_Hobbies_msg_color("green");
       setHobby(true);
     } else {
         set_Hobbies_msg("PLS SELECT YOUR HOBBIES");
         set_Hobbies_msg_color("red");
       setHobby(false);
     }
   }, [hobbycount]);

           
    function btn_fn()
    {
       set_show_table(true)

       set_name_msg("PLS ENTER YOUR NAME")
       set_name_msg_color("red");
       setName_data("");

       set_email_msg("PLS ENTER YOUR EMAIL");
       set_email_msg_color("red");
       setEmail_data("");

       set_pass_msg("PLS ENTER YOUR PASSWORD");
       set_pass_msg_color("red");
       setPass_data("");

       set_gender_msg("PLS SELECT YOUR GENDER");
       set_gender_msg_color("red");
       setGender_data("");

       set_city_msg("PLS SELECT YOUR CITY");
       set_city_msg_color("red");
       setCity_data("");

       set_Hobbies_msg("PLS SELECT YOUR HOBBIES");
       set_Hobbies_msg_color("red");
       setHobby_data([]);
       sethobbycount(0);



       const new_record = {
        name : name_data , 
        email : email_data , 
        pass : pass_data , 
        gender : gender_data , 
        city : city_data , 
        hobby : hobby_data
       }

       set_records([...records , new_record]);

    }
    function name_fn(event)
    {
        let name_value = event.target.value;

        name_value = name_value.replace(/[^a-zA-z ]/g, "");

        setName_data(name_value)
        event.target.value = name_value;
        if(name_value == "" || name_value.length == 0)
        {
            set_name_msg("PLS ENTER YOUR NAME");
            set_name_msg_color("red")
            setName(false)
        }
        else
        {
            set_name_msg("")
            setName(true);
        }
    }
    function email_fn(event)
    {
        setEmail_data(event.target.value)
        if(event.target.value == "")
        {
            set_email_msg("PLS ENTER YOUR EMAIL");
            set_email_msg_color("red")
              setEmail(false);
        }
        else
        {
            set_email_msg("Are You Sure");
            set_email_msg_color("green")
              setEmail(true);

        }   
    }
    function pass_fn(event)
    {
        setPass_data(event.target.value)
        if(event.target.value == "")
        {
            set_pass_msg("PLS ENTER YOUR PASSWORD");
            set_pass_msg_color("red")
              setPass(false);
        }   
        else 
        {
            set_pass_msg("")
              setPass(true);

        }
    }
    function gender_check(event)
    {
        setGender_data(event.target.value);
            if(event.target.value == "")
                {
                    set_gender_msg("PLS SELECT YOUR GENDER");
                    set_gender_msg_color("red")
                      setGender(false);
                }   
                else 
                {
                    set_gender_msg("")
                    setGender(true)
                }
    }
    function city_fn(event)
    {
        setCity_data(event.target.value)
        if(event.target.value == "")
        {
            set_city_msg("PLS SELECT YOUR CITY");
            set_city_msg_color("red")
              setCity(false);
        }
        else if (event.target.value == "Ratlam" || event.target.value == "Ujjain" || event.target.value == "Dewas" || event.target.value == "Indore")
        {
            set_city_msg("YOUR CITY IS :- "+event.target.value)
            set_city_msg_color("green");
            setCity(true)

        }
    }
   function check_hobby_fn(event)
{
    if(event.target.checked)
    {
           setHobby_data([...hobby_data, event.target.value]);
        sethobbycount(hobbycount + 1);
    }
    else
    {
     var new_arr = hobby_data.filter(item => item !== event.target.value);
     setHobby_data(new_arr); 
      hobbycount==0? sethobbycount(hobbycount) : sethobbycount(hobbycount-1);
        
    }


}
    return (
      <>
        <div id="main_div">
          <h1>TO DO LIST</h1>
          <label>ENTER NAME :- </label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={name_fn}
            value={name_data}
          ></input>
          <span style={{ color: name_msg_color }}>{name_msg}</span>
          <br></br>
          <br></br>
          <label>ENTER EMAIL :- </label>
          <input
            type="text"
            placeholder="Enter Email"
            value={email_data}
            onChange={email_fn}
          ></input>
          <span style={{ color: email_msg_color }}>{email_msg}</span>
          <br></br>
          <br></br>
          <label>ENTER PASSWORD :- </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={pass_data}
            onChange={pass_fn}
          ></input>
          <span style={{ color: pass_msg_color }}>{pass_msg}</span>
          <br></br>
          <br></br>
          <label>Choose Gender :- </label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={gender_data == "male"}
            onChange={gender_check}
          ></input>
          Male
          <input
            type="radio"
            value="female"
            name="gender"
            checked={gender_data == "female"}
            onChange={gender_check}
          ></input>
          Female
          <br></br>
          <br></br>
          <span style={{ color: gender_msg_color }}>{gender_msg}</span>
          <br></br>
          <br></br>
          <label>Choose City :- </label>
          <select onChange={city_fn} value={city_data}>
            <option value={""}>Select City</option>
            <option value={"Ratlam"}>Ratlam</option>
            <option value={"Ujjain"}>Ujjain</option>
            <option value={"Dewas"}>Dewas</option>
            <option value={"Indore"}>Indore</option>
          </select>
          <span style={{ color: city_msg_color }}>{city_msg}</span>
          <br></br>
          <br></br>
          <label>Tick Hobbies :- </label>
          <input
            type="checkbox"
            value="Cricket"
            checked={hobby_data.includes("Cricket")}
            onChange={check_hobby_fn}
          ></input>
          Cricket
          <input
            type="checkbox"
            value={"Hockey"}
            checked={hobby_data.includes("Hockey")}
            onChange={check_hobby_fn}
          ></input>
          Hockey
          <input
            type="checkbox"
            value={"Travelling"}
            checked={hobby_data.includes("Travelling")}
            onChange={check_hobby_fn}
          ></input>
          Travelling
          <input
            type="checkbox"
            value={"Singing"}
            checked={hobby_data.includes("Singing")}
            onChange={check_hobby_fn}
          ></input>
          Singing
          <br></br>
          <br></br>
          <span style={{ color: Hobbies_msg_color }}>{Hobbies_msg}</span>
          <br></br>
          <br></br>
          <button disabled={submit_disabled} onClick={btn_fn}>
            Submit
          </button>
        </div>
        {show_table ? (
          <List data={records} set_records={set_records}></List>
        ) : (
          ""
        )}
      </>
    );
}
export default To_do;