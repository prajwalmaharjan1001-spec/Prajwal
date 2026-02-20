import React from 'react'

export default function Meal() {
   const {label} = useParams();
   const [data, setData] = useState();
     const [load, setLoad] = useState(false);
     const [err, setErr] = useState();

     const getData = async () => {
    try {
      setLoad(true);

      const response = await axios.get(`${baseUrl}/lookup.php`, {
        params: {
          i: id
        }
      });
      setData(response.data);
      setLoad(false);
    } catch (err) {
      setErr(err.message);
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (load) {
    return <h1>Loading.....</h1>;
  }
  if (err) {
    return <h1>{err}</h1>;
  }

  return (
    <div>
      
    </div>
  )
}
