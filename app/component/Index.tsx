import Play from './Play'

export default function Index() {
	return(
	    <div className="flex flex-col gap-6">
	        <div className="w-full flex space-around gap-32 bg-gray-500">
	            <aside>
		        <nav className="flex flex-col items-center text-white gap-6">
		            <a>início</a>
			    <a>buscar</a>
			    <a>sua biblioteca</a>
		        </nav>
		    </aside>
	            <div>
	                <h1 className="semi-bold">Music</h1>
	            </div>
	        </div>
	        {<Play/>}
	    </div>
	);
}
