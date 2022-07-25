    for(var i =0; i<100; i++){
    const newBox = document.createElement('div');
    newBox.className='red-block';
    newBox.id='block-'+(i+1);

    newBox.addEventListener('mouseover', function() {
        newBox.style.visibility = 'hidden';
      });
    
    const main = document.getElementById('blocks');
    main.appendChild(newBox);
    }