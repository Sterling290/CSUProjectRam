import React from 'react';
import styled from 'styled-components'
import csuimage from '../smallerRam-image.png'
const Styles = styled.div`
.mainpage{
    background-color:rgb(100,120,100);
}
ul.polaroids a:after {
    content: attr(title);
  }

  ul.polaroids a {
    -webkit-transform: rotate(-2deg);
    -moz-transform: rotate(-2deg);
  }
  
  /* Rotate all even images 2 degrees */
  ul.polaroids li:nth-child(even) a {
    webkit-transform: rotate(2deg);
    moz-transform: rotate(2deg);
  }
  
  /* Don't rotate every third image, but offset its position */
  ul.polaroids li:nth-child(3n) a {
    -webkit-transform: none;
    -moz-transform: none;
    position: relative;
    top: -5px;
  }
  
  /* Rotate every fifth image by 5 degrees and offset it */
  ul.polaroids li:nth-child(5n) a {
    -webkit-transform: rotate(5deg);
    -moz-transform: rotate(5deg);
    position: relative;
    right: 5px;
  }
  
  /* Keep default rotate for every eighth, but offset it */
  ul.polaroids li:nth-child(8n) a {
    position: relative;
    top: 8px;
    right: 5px;
  }
  
  /* Keep default rotate for every eleventh, but offset it */
  ul.polaroids li:nth-child(11n) a {
    position: relative;
    top: 3px;
    left: -5px;
  }
  ul.polaroids a:hover {
    -webkit-transform: scale(1.25);
    -moz-transform: scale(1.25);
    position: relative;
    z-index: 5;
  }
  ul.polaroids a {
    -webkit-transition: -webkit-transform .15s linear;
    -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.25);
    -moz-box-shadow: 0 3px 6px rgba(0,0,0,.25);
  }
  
  /* On hover, darken the shadows a bit */
  ul.polaroids a {
    -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.5);
    -moz-box-shadow: 0 3px 6px rgba(0,0,0,.5);
  }


.large-12 columns{
    overflow: visible
}

`
export const Team = () =>(
<Styles>
<div class="large-12 columns" >
<ul class="polaroids large-block-grid-4 small-block-grid-2">
<li>
<a href="https://www.flickr.com/photos/zurbinc/3971679981/" title="Roeland!">
<img alt="Roeland!" src="https://d33wubrfki0l68.cloudfront.net/7b47ccb12a3b221295a3782149d93410590d1a08/91265/playground/uploads/upload/upload/192/image-01.jpg"></img>
</a>
</li>
<li>
<a href="https://www.flickr.com/photos/zurbinc/3985295842/" title="Discussion">
<img alt="Discussion" src="https://d33wubrfki0l68.cloudfront.net/b7711971f006689b3b7e0d5cc14f327375505f82/4cb59/playground/uploads/upload/upload/193/image-02.jpg"></img>
</a>
</li>
<li>
<a href="https://www.flickr.com/photos/zurbinc/3993123611/" title="A Hearty Laugh">
<img alt="A Hearty Laugh" src="https://d33wubrfki0l68.cloudfront.net/3f0f245d64264e8ebf4f97afdcabe1d13e640e4b/0e186/playground/uploads/upload/upload/194/image-03.jpg"></img>
</a>
</li>
<li>
<a href="https://www.flickr.com/photos/zurbinc/4001991326/" title="Evil Matt Coding">
<img alt="Evil Matt Coding" src="https://d33wubrfki0l68.cloudfront.net/13bedfebd9ef1d98001d3a8442ab5e7b17998c96/b6b67/playground/uploads/upload/upload/195/image-04.jpg"></img>
</a>
</li>
<li>
<a href="https://www.flickr.com/photos/zurbinc/4001992350/" title="Amanda Glares...">
<img alt="Amanda Glares..." src="https://d33wubrfki0l68.cloudfront.net/fb1d72ab3826fc2f8893724685dbd463fd175405/2bf94/playground/uploads/upload/upload/196/image-05.jpg"></img>
</a>
</li>
<li>
<a href="https://www.flickr.com/photos/zurbinc/4001229589/" title="Scribble scribble...">
<img alt="Scribbles" src="https://d33wubrfki0l68.cloudfront.net/accf50a8a5e4675e3fd947fd16d214a35b9ee94d/2efd4/playground/uploads/upload/upload/197/image-06.jpg"></img>
</a>
</li>
<li>
<a href="https://www.flickr.com/photos/zurbinc/3957026139/" title="The Dougernaut">
<img alt="The Dougernaut" src="https://d33wubrfki0l68.cloudfront.net/2289b84d7bd5e6b00c0e111d844713775525f63c/ee010/playground/uploads/upload/upload/198/image-07.jpg"></img>
</a>
</li>
<li>
<a href="https://www.flickr.com/photos/zurbinc/3428777148/" title="I See You!">
<img alt="I See You!" src="https://d33wubrfki0l68.cloudfront.net/accca6cffaae5b16a6d748aeb7fd9c6698287a8c/7522c/playground/uploads/upload/upload/199/image-08.jpg"></img>
</a>
</li>
<li>
<a href="https://www.flickr.com/photos/zurbinc/3799720274/" title="Rock Hard Balls">
<img alt="Rock Hard Balls" src="https://d33wubrfki0l68.cloudfront.net/76ac7d07367616d577b5378f9bf543dfdf231a12/e3790/playground/uploads/upload/upload/200/image-09.jpg"></img>
</a>
</li>
<li>
<a href="https://www.flickr.com/photos/zurbinc/3799719490/" title="Bocce Ball">
<img alt="Bocce Ball" src="https://d33wubrfki0l68.cloudfront.net/d130f0d6946edc9813f48078d798e50fcb68e392/12cbb/playground/uploads/upload/upload/201/image-10.jpg"></img>
</a>
</li>
<li>
<a href="https://www.flickr.com/photos/zurbinc/3888563172/" title="Boris &quot;Tatooine&quot;">
<img alt="Borris &quot;Tatooine&quot;" src="https://d33wubrfki0l68.cloudfront.net/60bb16458cf2869cf897bc6881cb934480a19110/57ad8/playground/uploads/upload/upload/202/image-11.jpg"></img>
</a>
</li>
<li>
<a href="https://www.flickr.com/photos/zurbinc/3427934527/" title="Sneakers &amp; Stilettos">
<img alt="Sneakers &amp;amp; Stilettos" src="https://d33wubrfki0l68.cloudfront.net/85a5e60e8ae2bf04195d55994890f286546a4aba/bef13/playground/uploads/upload/upload/203/image-12.jpg"></img>
</a>
</li>
</ul>
</div>
</Styles>
)