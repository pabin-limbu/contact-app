import React from "react";

function ContactRow(props) {
  return (
    <div>
      {props.section.map((item, index) => {
        return (
          <div key={item.title}>
            <h1>{item.title}</h1>
            {item.data.map((item, index) => {
              return (
                <ul key={item.key}>
                  <li>
                    <p>{item.name}</p>
                    <p>{item.number}</p>
                  </li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ContactRow;
