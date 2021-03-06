import React, {Component} from 'react';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class IconsPage extends Component {

    render() {
        return (
            <div class="icons-page">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Icons</h1>
                        <p>PrimeNG components internally use <a href="https://github.com/primefaces/primeicons">PrimeIcons</a> library, the official icons suite from <a href="https://www.primetek.com.tr">PrimeTek</a>.</p>
                    </div>
                </div>

                <div className="content-section documentation">
                    <h3 style={{marginTop:0}}>Download</h3>
                    <p>PrimeIcons is available at npm, run the following command to download it to your project.</p>
<CodeHighlight className="javascript">
{`npm install primeicons --save
`}
</CodeHighlight>

                    <h3>Getting Started</h3>
                    <p>PrimeIcons use the <strong>pi pi-&#123;icon&#125;</strong> syntax such as <strong>pi pi-check</strong>. 
                    A standalone icon can be displayed using an element such as <i>i</i> or <i>span</i></p>

<CodeHighlight className="markup">
{`<i class="pi pi-check"></i>
<i class="pi pi-times"></i>
`}
</CodeHighlight>

<i class="pi pi-check"></i>
<i class="pi pi-times"></i>

                    <h3>Size</h3>
                    <p>Size of the icons can easily be changed using font-size property.</p>

<CodeHighlight className="markup">
{`<i class="pi pi-check"></i>
`}
</CodeHighlight>

                    <i class="pi pi-check"></i>
    
<CodeHighlight className="markup">
{`<i class="pi pi-check" style={{'fontSize': '3em'}}></i>
`}
</CodeHighlight>

                    <i class="pi pi-check" style={{'fontSize': '3em'}}></i>

                    <h3>Spinning Animation</h3>
                    <p>Special pi-spin class applies infinite rotate to an icon.</p>
<CodeHighlight className="markup">
{`<i class="pi pi-spin pi-spinner" style={{'fontSize': '3em'}}></i>
`}
</CodeHighlight>

                    <i class="pi pi-spin pi-spinner" style={{'fontSize': '3em'}}></i>

                    <h3>List of Icons</h3>
                    <p>Here is the current list of PrimeIcons, more icons will be added periodically. You may also <a href="https://github.com/primefaces/primeicons/issues">request new icons</a> at the issue tracker.</p>
                    <div class="ui-g icons-list">
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-exclamation-triangle"></i>
                            <div>pi-exclamation-triangle</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-chevron-circle-left"></i>
                            <div>pi-chevron-circle-left</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-chevron-circle-down"></i>
                            <div>pi-chevron-circle-down</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-chevron-circle-right"></i>
                            <div>pi-chevron-circle-right</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-chevron-circle-up"></i>
                            <div>pi-chevron-circle-up</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-calendar"></i>
                            <div>pi-calendar</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-angle-double-down"></i>
                            <div>pi-angle-double-down</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-angle-double-left"></i>
                            <div>pi-angle-double-left</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-angle-double-right"></i>
                            <div>pi-angle-double-right</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-angle-double-up"></i>
                            <div>pi-angle-double-up</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-angle-down"></i>
                            <div>pi-angle-down</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-angle-left"></i>
                            <div>pi-angle-left</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-angle-right"></i>
                            <div>pi-angle-right</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-angle-up"></i>
                            <div>pi-angle-up</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-upload"></i>
                            <div>pi-upload</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-ban"></i>
                            <div>pi-ban</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-star-o"></i>
                            <div>pi-star-o</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-star"></i>
                            <div>pi-star</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-chevron-down"></i>
                            <div>pi-chevron-down</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-chevron-left"></i>
                            <div>pi-chevron-left</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-chevron-right"></i>
                            <div>pi-chevron-right</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-chevron-up"></i>
                            <div>pi-chevron-up</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-caret-down"></i>
                            <div>pi-caret-down</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-caret-left"></i>
                            <div>pi-caret-left</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-caret-right"></i>
                            <div>pi-caret-right</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-caret-up"></i>
                            <div>pi-caret-up</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-search"></i>
                            <div>pi-search</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-check"></i>
                            <div>pi-check</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-check-circle"></i>
                            <div>pi-check-circle</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-times"></i>
                            <div>pi-times</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-times-circle"></i>
                            <div>pi-times-circle</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-plus"></i>
                            <div>pi-plus</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-plus-circle"></i>
                            <div>pi-plus-circle</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-plus"></i>
                            <div>pi-minus</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-plus-circle"></i>
                            <div>pi-minus-circle</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-circle-on"></i>
                            <div>pi-circle-on</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-circle-off"></i>
                            <div>pi-circle-off</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-sort"></i>
                            <div>pi-sort</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-sort-up"></i>
                            <div>pi-sort-up</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-sort-down"></i>
                            <div>pi-sort-down</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-step-backward"></i>
                            <div>pi-step-backward</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-step-forward"></i>
                            <div>pi-step-forward</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-th-large"></i>
                            <div>pi-th-large</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-arrow-down"></i>
                            <div>pi-arrow-down</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-arrow-left"></i>
                            <div>pi-arrow-left</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-arrow-right"></i>
                            <div>pi-arrow-right</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-arrow-up"></i>
                            <div>pi-arrow-up</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-bars"></i>
                            <div>pi-bars</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-arrow-circle-down"></i>
                            <div>pi-arrow-circle-down</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-arrow-circle-left"></i>
                            <div>pi-arrow-circle-left</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-arrow-circle-right"></i>
                            <div>pi-arrow-circle-right</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-arrow-circle-up"></i>
                            <div>pi-arrow-circle-up</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-info"></i>
                            <div>pi-info</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-info-circle"></i>
                            <div>pi-info-circle</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-home"></i>
                            <div>pi-home</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-spinner"></i>
                            <div>pi-spinner</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-external-link"></i>
                            <div>pi-external-link</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-window-maximize"></i>
                            <div>pi-window-maximize</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-window-minimize"></i>
                            <div>pi-window-minimize</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-user"></i>
                            <div>pi-user</div>
                        </div>
                        <div class="ui-g-12 ui-md-2">
                            <i class="pi pi-refresh"></i>
                            <div>pi-refresh</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}