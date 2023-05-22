import React from "react";
import "./styles.scss";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import binIcon from "../../assets/svg/bin.svg";
import cutIcon from "../../assets/svg/cut.svg";
import copyIcon from "../../assets/svg/copy.svg";

function Footer() {
  const [isChoose, setIsChoose] = React.useState(false);
  const [isCome, setIsCome] = React.useState(false);
  const [isNotCome, setIsNotCome] = React.useState(false);

  const chooseText = "Choisi(e)";
  const comeText = "Venu";
  const notComeText = "Pas venu";

  function handleChoose() {
    setIsChoose(!isChoose);
  }
  function handleCome() {
    setIsCome(!isCome);
    isNotCome && setIsNotCome(false);
  }
  function handleNotCome() {
    setIsNotCome(!isNotCome);
    isCome && setIsCome(false);
  }

  return (
    <footer className="App-footer">
      <div className="Footer-left">
        {isChoose ? (
          <Button onClick={handleChoose} label={chooseText} theme="green" />
        ) : (
          <ButtonLink onClick={handleChoose} text={chooseText} />
        )}

        {isCome ? (
          <Button onClick={handleCome} label={comeText} theme="dark-blue" />
        ) : (
          <ButtonLink onClick={handleCome} text={comeText} />
        )}

        {isNotCome ? (
          <Button onClick={handleNotCome} label={notComeText} theme="red" />
        ) : (
          <ButtonLink onClick={handleNotCome} text={notComeText} />
        )}

        <div className="Footer-divider" />

        <ButtonLink icon={copyIcon} text="Copier" />
        <ButtonLink icon={cutIcon} text="Couper" />
        <ButtonLink icon={binIcon} text="Supprimer" />
      </div>

      <div className="Footer-right">
        <Button
          label="Plus d'options (produits, remises, ...)"
          theme="light"
          display="big"
        />
        <Button label="Encaisser 30,00 €" theme="green" display="big" />
      </div>

      {/* <Divider /> */}

      {/* <ActionsLinks containerStyles={styles.actionsLinks}>
  <UnderlineText text="Copier" icon={<CopyIcon />} />
  <UnderlineText text="Couper" icon={<CutIcon />} />
  <UnderlineText text="Supprimer" icon={<BinIcon />} />
</ActionsLinks> */}

      {/* <Divider /> */}

      {/* <View style={styles.right}>
  <Button
    stylesContainer={[styles.button, { flex: 1 }]}
    label="Plus d'options (produits, remises, ...)"
  />
  <Button
    stylesContainer={[styles.button, { maxWidth: 180 }]}
    label="Encaisser 230,00 €"
    theme="green"
  />
</View> */}
    </footer>
  );
}

export default Footer;

// import React from "react";
// import { StyleSheet, View } from "react-native";

// import UnderlineText from "../UnderlineText";
// import CopyIcon from "../../assets/svg/js/CopyIcon";
// import CutIcon from "../../assets/svg/js/CutIcon";
// import BinIcon from "../../assets/svg/js/BinIcon";
// import ActionsLinks from "../ActionsLinks";
// import Button from "../Button";
// import Divider from "../Divider";

// export default function BottomActions() {
//   const [isChoose, setIsChoose] = React.useState(false);
//   const [isCome, setIsCome] = React.useState(false);
//   const [isNotCome, setIsNotCome] = React.useState(false);

//   const chooseText = "Choisi(e)";
//   const comeText = "Venu";
//   const notComeText = "Pas venu";

//   function handleChoose() {
//     setIsChoose(!isChoose);
//   }
//   function handleCome() {
//     setIsCome(!isCome);
//     isNotCome && setIsNotCome(false);
//   }
//   function handleNotCome() {
//     setIsNotCome(!isNotCome);
//     isCome && setIsCome(false);
//   }

//   return (
//     <View>
//       <View style={styles.left}>
//         {isChoose ? (
//           <Button onClick={handleChoose} label={chooseText} theme="green" />
//         ) : (
//           <UnderlineText
//             onClick={handleChoose}
//             text={chooseText}
//             disabled={false}
//           />
//         )}

//         {isCome ? (
//           <Button onClick={handleCome} label={comeText} theme="darkBlue" />
//         ) : (
//           <UnderlineText
//             onClick={handleCome}
//             text={comeText}
//             disabled={false}
//           />
//         )}

//         {isNotCome ? (
//           <Button onClick={handleNotCome} label={notComeText} theme="red" />
//         ) : (
//           <UnderlineText
//             onClick={handleNotCome}
//             text={notComeText}
//             disabled={false}
//           />
//         )}
//       </View>

//       <Divider />

//       <ActionsLinks containerStyles={styles.actionsLinks}>
//         <UnderlineText text="Copier" icon={<CopyIcon />} />
//         <UnderlineText text="Couper" icon={<CutIcon />} />
//         <UnderlineText text="Supprimer" icon={<BinIcon />} />
//       </ActionsLinks>

//       <Divider />

//       <View style={styles.right}>
//         <Button
//           stylesContainer={[styles.button, { flex: 1 }]}
//           label="Plus d'options (produits, remises, ...)"
//         />
//         <Button
//           stylesContainer={[styles.button, { maxWidth: 180 }]}
//           label="Encaisser 230,00 €"
//           theme="green"
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   left: {
//     flexDirection: "row",
//     justifyContent: "center",
//     gap: 16,
//   },
//   right: {
//     gap: 16,
//   },
//   button: {
//     alignSelf: "center",
//     height: 56,
//   },
//   actionsLinks: {
//     justifyContent: "center",
//   },
// });
