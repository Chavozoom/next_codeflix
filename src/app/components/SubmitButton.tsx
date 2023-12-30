type SubmitButtonProps = {
    name: string;
};

export function SubmitButton({ name }: SubmitButtonProps) {
    return (
        <div className="flex flex-col-reverse items-center justify-center space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <button
                className="flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8"
                type="submit"
            >
                {name}
            </button>
        </div>
    );
};