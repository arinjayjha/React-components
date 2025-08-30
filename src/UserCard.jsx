import React from "react";

const UserCard = ({ name, email, age }) => {

    const cardStyle = {
        border: "1px solid #ddd",
        padding: "12px 16px",
        borderRadius: "10px",
        marginBottom: "12px",
        backgroundColor: age > 30 ? "#fff4e6" : "#e8f9f0",
        maxWidth: "360px",
    };

    const nameStyle = { margin: 0, fontSize: "1.1rem" };
    const emailStyle = { margin: "6px 0 0", color: "#555" };
    const ageStyle = { margin: "4px 0 0", fontWeight: 600 };

    return (
        <div style={cardStyle}>
            <h3 style={nameStyle}>{name}</h3>
            <p style={emailStyle}>{email}</p>
            <p style={ageStyle}>Age: {age}</p>
        </div>
    );
};

UserCard.defaultProps = {
    age: 18,
};

export default UserCard;
