import Accordion from "react-bootstrap/Accordion";

function FlushExample() {
  return (
    <Accordion defaultActiveKey="0" flush >
      <Accordion.Item eventKey="0">
        <Accordion.Header className="mt-3">Welcome in YouBook</Accordion.Header>
        <Accordion.Body>
          Benvenuti in YouBook, qui potete trovare una vasta gamma di libri per
          svagarvi nel vostro tempo libero e trovare ciò che cercate grazie alle
          nostre categorie. Youbook va bene per tutti, dai bambini agli adulti
          non facciamo nessuna differenza. Buona lettura da YouBook.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FlushExample;



