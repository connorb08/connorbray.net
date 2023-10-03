const Information = () => {
    return (
        <div className="p-7 block-section">
            {/* <!-- Start Info Block --> */}
            <h2 className="block-title">Information</h2>
            <div className="space-y-4">
                <div className="flex justify-between">
                    <div className="text-gray-11">Location</div>
                    <div className="font-medium text-right text-gray-11">
                        Portland, ME
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-gray-11">Experience</div>
                    <div className="font-medium text-right text-gray-11">
                        8+ years
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;
