type AllQuizzesCompletedMessageProps = {
    onRestart: () => void;
};

const AllQuizzesCompletedMessage = ({ onRestart }: AllQuizzesCompletedMessageProps) => {
    return (
        <div className="text-center mt-6">
            <div className="text-xl text-green-600 mb-4">
                🎉 You’ve completed all the quizzes! Well done!
            </div>
            {onRestart && (
                <button
                    onClick={onRestart}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Restart Quizzes
                </button>
            )}
        </div>
    );
}

export { AllQuizzesCompletedMessage };