import React, { useState } from "react";

export default function App() {
  const lineup = ['DJ Nova', 'Luna Beats', 'Kapture'];
  const [tickets, setTickets] = useState({ general: 0, vip: 0, table: 0 });
  const [quantities, setQuantities] = useState({ general: 0, vip: 0, table: 0 });

  const handleBuy = (type) => {
    setTickets(previousTicket => ({ ...previousTicket, [type]: previousTicket[type] + Number(quantities[type]) }));
  }

  const handleQtyChange = (type, value) => {
    setQuantities(previousQty => ({ ...previousQty, [type]: value }));
  }

  return (
    <>

    </>
  );
}