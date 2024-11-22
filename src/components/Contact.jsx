import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = (props) => {
  const [landlord, setLandLord] = useState(null);
  const [message, setMessage] = useState("");

  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchLandLord = async () => {
      try {
        const res = await fetch(`${url}/api/user/${props.listing.userRef}`);
        const data = await res.json();
        setLandLord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandLord();
  }, [props.listing.userRef]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact{" "}
            <span>
              <span className="font-semibold"> {landlord.username} </span>
              for{" "}
              <span className="font-semibold">
                {props.listing.name.toLowerCase()}
              </span>
            </span>
          </p>
          <textarea
            name="message"
            id="message"
            rows={2}
            value={message}
            onChange={handleMessage}
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg"
          ></textarea>
          {/* email generator */}
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${props.listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send
          </Link>
        </div>
      )}
    </div>
  );
};

export default Contact;
