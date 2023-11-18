import styles from './CountCard.module.css'
function CountCard() {
  return (
    <div id ={styles.media}
     className="p-[2px] min-w-[295px] max-w-[350px] w-full h-[130px] rounded-[10px] bg-gradient-to-r from-[#e71d36] to-[#f46036] flex justify-center items-center">
      <div className="h-full w-full bg-[#0a0e16] rounded-[10px]">
        <h1 className="text-xl font-quicksand mt-4 ml-6 font-medium-600">
          Total Projects
        </h1>
        <h1 className="text-[45px] ml-[33px] mt-[6px] font-quicksand font-medium-600">
          8
        </h1>
      </div>
    </div>
  );
}

export default CountCard;
