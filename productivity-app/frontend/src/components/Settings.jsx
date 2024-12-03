import ReactSlider from 'react-slider';

function Settings()
{
    return(
        <div style={{textAlign:'left'}}>
            <h2>Settings:</h2>
            <label>Work Minutes:</label>
            <Slider />
<Slider defaultValue={3} />
<Slider value={sliderValue} onChange={sliderOnChange} />
<Slider min={0} max={10} />
<Slider vertical />
<Slider disabled />
<Slider step={10} />
<Slider size="small" />
            <label>Break Minutes:</label>
        </div>
    );
}

export default Settings;