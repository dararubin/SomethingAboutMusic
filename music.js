function showElement(id, display) {
	if(!display)
		display = 'inline';
	if(document.getElementById(id).style.display != 'none')
	{
		document.getElementById(id).style.display = 'none';
		return 'Show';
	}
	else
	{
		document.getElementById(id).style.display = display;
		return 'Hide';
}
}

