export const ActionButton = ({ text, action }) => {
    
    return (
        <>
            {/* on Clickでクリック時に指定した関数が実行できる */}
            <button className="bg-gray-600 hover:bg-gray-500 text-white rounded-lg px-4 py-2 shadow-md mx-1" type="button" onClick={action}>
                {text}
            </button>
        </>
    );
};