const CHOICES = require('./choices.js')
const COMMON = [
	{
		//API Calls
		//Basic Device Information
		about: true,
		//Device Settings
		analogaudiosetup: true,
		//NDI Encode
		encodesetup: true,
		encodetransport: true,
		//NDI Finder
		NDIDisServer: true,
		//PTZ
		birddogptzsetup: true,
		recallPost: true,
		savePost: true,
		//Exposure
		birddogexpsetup: true,
		//White Balance
		birddogwbsetup: true,
		//Picture Settings
		birddogpicsetup: true,
	},
	{
		//Variables
		// General Camera Variables
		firmware: { label: 'Firmware' },
		model: { label: 'Model' },
		hostname: { label: 'Name' },
		ipaddress: { label: 'IP Address' },
		netmask: { label: ' Network Mask' },
		network_config: { label: 'Network Config Method' },
		serial_number: { label: ' Serial Number' },
		status: { label: 'Status' },
		// VISCA Variables
		standby: { label: 'Standby' },
		freeze: { label: 'Freeze' },
		// Analog Audio Variables
		audio_in_gain: { label: 'Audio In Gain' },
		audio_out_gain: { label: 'Audio Out Gain' },
		audio_output: { label: 'Audio Output' },
		// Video Output Interface Variables
		// Encode Setup Variables
		bandwidth_mode: { label: 'Bandwidth Mode' },
		bandwidth_select: { label: 'Bandwidth Select' },
		ndi_audio: { label: `NDI Audio` },
		ndi_group: { label: `NDI Group` },
		ndi_group_name: { label: `NDI Group Name` },
		stream_name: { label: `Stream Name` },
		video_format: { label: `Video Format` },
		// Encode Transport Variables
		transmit_method: { label: `Transmit Method` },
		transmit_netprefix: { label: 'Transmit Net Prefix' },
		transmit_netmask: { label: 'Transmit Netmask' },
		// NDI Discovery Server Variables
		ndi_discovery_server: { label: `NDI Discovery Server` },
		ndi_discovery_server_ip: { label: `NDI Discovery Server IP` },
		// PTZ Variables
		zoom_speed: { label: `Zoom Speed` },
		zoom_position: { label: `Zoom Position` },
		// Focus Variables
		focus_mode: { label: `Focus Mode` },
		// Exposure Variables
		bright_level: { label: `Bright Level` },
		exposure_comp: { label: `Exposure Compensation` },
		exposure_comp_level: { label: `Exposure Compensation Level` },
		exposure_mode: { label: `Exposure Mode` },
		gain: { label: `Gain` },
		iris: { label: `Iris` },
		shutter_speed: { label: `Shutter Speed` },
		// White Balance Variables
		blue_gain: { label: `Blue Gain` },
		red_gain: { label: `Red Gain` },
		wb_mode: { label: `White Balance Mode` },
		// Picture Setup Variables
		flip: { label: `Flip` },
		mirror: { label: `Mirror` },
	},
	{
		//actions
		/////////
		// General Camera Actions
		standby: { choices: CHOICES.STANDBY, default: 'on' },
		freeze: { choices: CHOICES.ON_OFF, default: 'On' },
		// Analog Audio Actions
		analogAudioInGain: { range: { min: -50, max: 50, default: 0 } },
		analogAudioOutGain: { range: { min: -50, max: 50, default: 0 } },
		analogAudioOutput: { choices: CHOICES.ANALOG_AUDIO_OUTPUT, default: 'DecodeComms' },
		// Video Output Interface Actions
		// Encode Setup Actions
		encodeBandwidth: {
			choices: CHOICES.ENCODE_BANDWIDTH_MODE,
			default: 'NDIManaged',
			range: { min: 80, max: 120, default: 80 },
		},
		ndiAudio: { choices: CHOICES.ENCODE_NDI_AUDIO, default: 'NDIAudioMute' },
		ndiGroupEnable: { choices: CHOICES.ENCODE_NDIGroup, default: 'NDIGroupDis' },
		// Encode Transport Actions
		transmit_method: { choices: CHOICES.ENCODE_TXPM, default: 'UDP' },
		// NDI Discovery Server Actions
		ndi_discovery_server: { choices: CHOICES.NDI_DIS_SVR, default: 'NDIDisServDis' },
		// PTZ Actions
		zoomSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 7, default: 4 } },
		zoom: { choices: CHOICES.PTZ_ZOOM, default: 'in' },
		savePset: { range: { min: 1, max: 64, default: 1 } },
		recallPset: { range: { min: 1, max: 64, default: 1 } },
		// Focus Actions
		focus: { choices: CHOICES.FOCUS_CONTROL, default: 'near' },
		focusM: { choices: CHOICES.AUTO_FOCUS, default: 'Auto' },
		// Exposure Actions
		expComp: { choices: CHOICES.ON_OFF, default: 'Off' },
		// White Balance Actions
		wbOnePush: true,
		blue_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
		red_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
		// Picture Setup Actions
		picFlip: { choices: CHOICES.ON_OFF, default: 'On' },
		picMirror: { choices: CHOICES.ON_OFF, default: 'On' },
		// Other Actions
		custom: true,
	},
	{
		//feedback
		wb_mode: true,
		standby_status: true,
	},
]

module.exports = {
	// Model Specific
	MODELS: [
		{
			id: 'P100',
			apicalls: {
				...COMMON[0],
				birddogcmsetup: true,
				pt_pos: true,
			},
			variables: {
				...COMMON[1],
				// PTZ Variables
				pan_speed: { label: `Pan Speed` },
				tilt_speed: { label: `Tilt Speed` },
				pan_position: { label: `Pan Position` },
				tilt_position: { label: `Tilt Position` },
				// Exposure Variables
				shutter_control_overwrite: { label: `Shutter Control Overwrite` },
				shutter_speed_overwrite: { label: `Shutter Speed Overwrite` },
				// White Balance Variables
				color_temp: { label: `Color Temp` },
				// Picture Setup Variables
				color: { label: `Saturation` },
				contrast: { label: `Contrast` },
				effect: { label: `Effect` },
				gamma: { label: `Gamma` },
				hue: { label: `Hue` },
				noise_reduction: { label: `Noise Reduction` },
				sharpness: { label: `Sharpness` },
				wide_dynamic_range: { label: `Wide Dynamic Range` },
				// Color Matrix Variables
				cm_blue_gain: { label: 'Blue Gain' },
				cm_blue_hue: { label: 'Blue Hue' },
				cm_cyan_gain: { label: 'Cyan Gain' },
				cm_cyan_hue: { label: 'Cyan Hue' },
				cm_green_gain: { label: 'Green Gain' },
				cm_green_hue: { label: 'Green Hue' },
				cm_mag_gain: { label: 'Magenta Gain' },
				cm_mag_hue: { label: 'Magenta Hue' },
				cm_red_gain: { label: 'Red Gain' },
				cm_red_hue: { label: 'Red Hue' },
				cm_yellow_gain: { label: 'Yellow Gain' },
				cm_yellow_hue: { label: 'Yellow Hue' },
			},
			actions: {
				...COMMON[2],
				// General Camera Actions
				// Analog Audio Actions
				// Video Output Interface Actions
				// Encode Setup Actions
				// Encode Transport Actions
				// NDI Discovery Server Actions
				// PTZ Actions
				pt: {
					choices: CHOICES.PTZ_DIRECTION,
					default: 'up',
					posPanChoices: CHOICES.POS_PAN_P100,
					posPanDefault: '0000',
					posTiltChoices: CHOICES.POS_TILT,
					posTiltDefault: '0000',
				},
				zoom: { ...COMMON[2].zoom, posZoomChoices: CHOICES.POS_ZOOM_10, posZoomDefault: '0000' },
				panSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 21, default: 11 } },
				tiltSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 18, default: 9 } },
				// Focus Actions
				// Exposure Actions
				bright_level: { range: { min: 0, max: 27, default: 14 } },
				expCompLvl: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -7, max: 7, default: 0 } },
				exposure_mode: { choices: CHOICES.EXP_MODE_1, default: 'FULL-AUTO' },
				gain: { choices: CHOICES.GAIN_1, default: 0 },
				iris: { choices: CHOICES.IRIS_1, default: 8, range: { closed: 0, min: 1, max: 13 } },
				shutter_control_overwrite: { choices: CHOICES.ON_OFF, default: 'On' },
				shutter_speed: {
					shutter_50: CHOICES.SHUTTER_50,
					shutter_60: CHOICES.SHUTTER_60,
					default: 6,
					range: { min: 0, max: 21 },
				},
				shutter_speed_overwrite: { range: { min: 30, max: 110, default: 60 } },
				// White Balance Actions
				wb_mode: { choices: CHOICES.WB_MODE_1, default: 'AUTO' },
				color_temp: { choices: CHOICES.COLOR_TEMP, default: '6500' },
				// Picture Setup Actions
				color: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 8 } },
				contrast: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 8 } },
				pictureEffect: { choices: CHOICES.PICTURE_EFFECT, default: 'BW' },
				gamma: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 4, default: 2 } },
				hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 8 } },
				noise_reduction: { choices: CHOICES.OFF_1_to_5, default: 'Off' },
				sharpness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 8 } },
				wide_dynamic_range: { choices: CHOICES.OFF_1_to_6, default: 'Off' },
				// Color Matrix Actions
				cm_blue_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_blue_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_cyan_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_cyan_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_mag_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_mag_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				// Advanced Setup Actions
				// External Setup Actions
				// Detail Setup Actions
				// Gamma Setup Actions
				// Other Actions
			},
			feedback: {
				...COMMON[3],
			},
		},
		{
			id: 'PF120',
			apicalls: {
				...COMMON[0],
				birddogcmsetup: true,
			},
			variables: {
				...COMMON[1],
				// General Camera Actions
				// Analog Audio Actions
				// Video Output Interface Actions
				// Encode Setup Actions
				tally_mode: { label: `Tally Mode` },
				// Exposure Variables
				shutter_control_overwrite: { label: `Shutter Control Overwrite` },
				shutter_speed_overwrite: { label: `Shutter Speed Overwrite` },
				// White Balance Variables
				color_temp: { label: `Color Temp` },
				// Picture Setup Variables
				color: { label: `Saturation` },
				contrast: { label: `Contrast` },
				effect: { label: `Effect` },
				gamma: { label: `Gamma` },
				hue: { label: `Hue` },
				noise_reduction: { label: `Noise Reduction` },
				sharpness: { label: `Sharpness` },
				wide_dynamic_range: { label: `Wide Dynamic Range` },
				// Color Matrix Variables
				cm_blue_gain: { label: 'Blue Gain' },
				cm_blue_hue: { label: 'Blue Hue' },
				cm_cyan_gain: { label: 'Cyan Gain' },
				cm_cyan_hue: { label: 'Cyan Hue' },
				cm_green_gain: { label: 'Green Gain' },
				cm_green_hue: { label: 'Green Hue' },
				cm_mag_gain: { label: 'Magenta Gain' },
				cm_mag_hue: { label: 'Magenta Hue' },
				cm_red_gain: { label: 'Red Gain' },
				cm_red_hue: { label: 'Red Hue' },
				cm_yellow_gain: { label: 'Yellow Gain' },
				cm_yellow_hue: { label: 'Yellow Hue' },
			},
			actions: {
				...COMMON[2],
				// General Camera Actions
				// Analog Audio Actions
				// Video Output Interface Actions
				// Encode Setup Actions
				tally: { choices: CHOICES.TALLY_MODE, default: 'TallyOn' },
				// Encode Transport Actions
				// NDI Discovery Server Actions
				// PTZ Actions
				zoom: { ...COMMON[2].zoom, posZoomChoices: CHOICES.POS_ZOOM_20, posZoomDefault: '0000' },
				// Focus Actions
				// Exposure Actions
				bright_level: { range: { min: 0, max: 27, default: 14 } },
				expCompLvl: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -7, max: 7, default: 0 } },
				exposure_mode: { choices: CHOICES.EXP_MODE_1, default: 'FULL-AUTO' },
				gain: { choices: CHOICES.GAIN_1, default: 0 },
				iris: { choices: CHOICES.IRIS_1, default: 8, range: { closed: 0, min: 1, max: 13 } },
				shutter_control_overwrite: { choices: CHOICES.ON_OFF, default: 'On' },
				shutter_speed: {
					shutter_50: CHOICES.SHUTTER_50,
					shutter_60: CHOICES.SHUTTER_60,
					default: 6,
					range: { min: 0, max: 21 },
				},
				shutter_speed_overwrite: { range: { min: 30, max: 110, default: 60 } },
				// White Balance Actions
				wb_mode: { choices: CHOICES.WB_MODE_1, default: 'AUTO' },
				color_temp: { choices: CHOICES.COLOR_TEMP, default: '6500' },
				// Picture Setup Actions
				color: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 8 } },
				contrast: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 8 } },
				pictureEffect: { choices: CHOICES.PICTURE_EFFECT, default: 'BW' },
				gamma: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 4, default: 2 } },
				hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 8 } },
				noise_reduction: { choices: CHOICES.OFF_1_to_5, default: 'Off' },
				sharpness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 8 } },
				wide_dynamic_range: { choices: CHOICES.OFF_1_to_6, default: 'Off' },
				// Color Matrix Actions
				cm_blue_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_blue_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_cyan_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_cyan_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_mag_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_mag_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				// Advanced Setup Actions
				// External Setup Actions
				// Detail Setup Actions
				// Gamma Setup Actions
				// Other Actions
			},
			feedback: {
				...COMMON[3],
			},
		},
		{
			id: 'P200_A2_A3',
			apicalls: {
				...COMMON[0],
				birddogcmsetup: true,
				birddogadvancesetup: true,
				pt_pos: true,
			},
			variables: {
				...COMMON[1],
				// Encode Setup Variables
				tally_mode: { label: `Tally Mode` },
				// PTZ Variables
				pan_speed: { label: `Pan Speed` },
				tilt_speed: { label: `Tilt Speed` },
				pan_position: { label: `Pan Position` },
				tilt_position: { label: `Tilt Position` },
				// Exposure Variables
				ae_response: { label: `Ae Response` },
				gain_limit: { label: `Gain Limit` },
				high_sensitivity: { label: `High Sensitivity` },
				slow_shutter_en: { label: `Slow Shutter Enable` },
				slow_shutter_limit: { label: `Slow Shutter Limit` },
				// Picture Setup Variables
				backlight_com: { label: `Backlight Compensation` },
				chroma_suppress: { label: `Chroma Suppress` },
				effect: { label: `Effect` },
				gamma: { label: `Gamma` },
				highlight_comp: { label: `Highlight Compensation` },
				highlight_comp_mask: { label: `Highlight Compensation Mask` },
				ir_cutfilter: { label: `IR Cut Filter` },
				noise_reduction: { label: `Noise Reduction` },
				sharpness: { label: `Sharpness` },
				stabilizer: { label: `Stabilizer` },
				// Color Matrix Variables
				cm_blue_gain: { label: 'Blue Gain' },
				cm_blue_hue: { label: 'Blue Hue' },
				cm_color_gain: { label: 'Color Gain' },
				cm_cyan_gain: { label: 'Cyan Gain' },
				cm_cyan_hue: { label: 'Cyan Hue' },
				cm_green_gain: { label: 'Green Gain' },
				cm_green_hue: { label: 'Green Hue' },
				cm_hue_phase: { label: 'Hue Phase' },
				cm_mag_gain: { label: 'Magenta Gain' },
				cm_mag_hue: { label: 'Magenta Hue' },
				cm_red_gain: { label: 'Red Gain' },
				cm_red_hue: { label: 'Red Hue' },
				cm_yellow_gain: { label: 'Yellow Gain' },
				cm_yellow_hue: { label: 'Yellow Hue' },
				// Advanced Setup Variables
				brightness: { label: 'Brightness' },
				brightness_comp: { label: 'Brightness Comp' },
				comp_level: { label: 'Comp Level' },
				gamma_offset: { label: 'Gamma Offset' },
				high_resolution: { label: 'High Resolution' },
				video_enhancement: { label: 'Video Enhancement' },
			},
			actions: {
				...COMMON[2],
				// General Camera Actions
				// Analog Audio Actions
				// Video Output Interface Actions
				// Encode Setup Actions
				tally: { choices: CHOICES.TALLY_MODE, default: 'TallyOn' },
				// Encode Transport Actions
				// NDI Discovery Server Actions
				// PTZ Actions
				pt: {
					choices: CHOICES.PTZ_DIRECTION,
					default: 'up',
					posPanChoices: CHOICES.POS_PAN_P200,
					posPanDefault: '0000',
					posTiltChoices: CHOICES.POS_TILT,
					posTiltDefault: '0000',
				},
				zoom: { ...COMMON[2].zoom, posZoomChoices: CHOICES.POS_ZOOM_30, posZoomDefault: '0000' },
				panSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 21, default: 11 } },
				tiltSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 18, default: 9 } },
				// Focus Actions
				// Exposure Actions
				ae_response: { range: { min: 1, max: 48, default: 1 } },
				bright_level: { range: { min: 0, max: 31, default: 16 } },
				expCompLvl: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				exposure_mode: { choices: CHOICES.EXP_MODE_2, default: 'FULL-AUTO' },
				gain: { choices: CHOICES.GAIN_2, default: 1 },
				gain_limit: { range: { min: 4, max: 15, default: 15 } },
				iris: { choices: CHOICES.IRIS_2, default: 12, range: { closed: 0, min: 5, max: 17 } },
				highSensitivity: { choices: CHOICES.ON_OFF, default: 'On' },
				shutter_speed: {
					shutter_50: CHOICES.SHUTTER_50,
					shutter_60: CHOICES.SHUTTER_60,
					default: 6,
					range: { min: 0, max: 21 },
				},
				slow_shutter_en: { choices: CHOICES.ON_OFF, default: 'Off' },
				slow_shutter_limit: { range: { min: 1, max: 6, default: 3 } },
				// White Balance Actions
				wb_mode: { choices: CHOICES.WB_MODE_2, default: 'AUTO' },
				// Picture Setup Actions
				backlight_com: { choices: CHOICES.ON_OFF, default: 'Off' },
				chroma_suppress: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				pictureEffect: { choices: CHOICES.PICTURE_EFFECT, default: 'BW' },
				gamma: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 1, default: 1 } },
				highlight_comp: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				highlight_comp_mask: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 3, default: 1 } },
				ir_cutfilter: { choices: CHOICES.IR_CUT_FILTER_3, default: 'NoiseReduction' },
				noise_reduction: { choices: CHOICES.OFF_1_to_5, default: 'Off' },
				sharpness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				stabilizer: { choices: CHOICES.ON_OFF, default: 'Off' },
				// Color Matrix Actions
				cm_blue_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_blue_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_color_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
				cm_cyan_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_cyan_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_hue_phase: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
				cm_mag_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_mag_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				// Advanced Setup Actions
				brightness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 6, default: 3 } },
				brightness_comp: { choices: CHOICES.BRIGHTNESS_COMP, default: 'STANDARD' },
				comp_level: { choices: CHOICES.L_Mid_H, default: 'LOW' },
				gamma_offset: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -16, max: 64, default: 40 } },
				high_resolution: { choices: CHOICES.ON_OFF, default: 'Off' },
				video_enhancement: { choices: CHOICES.ON_OFF, default: 'Off' },
				// External Setup Actions
				// Detail Setup Actions
				// Gamma Setup Actions
				// Other Actions
			},
			feedback: {
				...COMMON[3],
			},
		},
		{
			id: 'P200_A4_A5',
			apicalls: {
				...COMMON[0],
				birddogcmsetup: true,
				birddogadvancesetup: true,
				pt_pos: true,
			},
			variables: {
				...COMMON[1],
				// Encode Setup Variables
				tally_mode: { label: `Tally Mode` },
				// PTZ Variables
				pan_speed: { label: `Pan Speed` },
				tilt_speed: { label: `Tilt Speed` },
				pan_position: { label: `Pan Position` },
				tilt_position: { label: `Tilt Position` },
				// Exposure Variables
				ae_response: { label: `Ae Response` },
				gain_limit: { label: `Gain Limit` },
				high_sensitivity: { label: `High Sensitivity` },
				slow_shutter_en: { label: `Slow Shutter Enable` },
				slow_shutter_limit: { label: `Slow Shutter Limit` },
				// Picture Setup Variables
				backlight_com: { label: `Backlight Compensation` },
				chroma_suppress: { label: `Chroma Suppress` },
				effect: { label: `Effect` },
				gamma: { label: `Gamma` },
				highlight_comp: { label: `Highlight Compensation` },
				highlight_comp_mask: { label: `Highlight Compensation Mask` },
				ir_cutfilter: { label: `IR Cut Filter` },
				low_latency: { label: `Low Latency` },
				noise_reduction: { label: `Noise Reduction` },
				sharpness: { label: `Sharpness` },
				stabilizer: { label: `Stabilizer` },
				// Color Matrix Variables
				cm_blue_gain: { label: 'Blue Gain' },
				cm_blue_hue: { label: 'Blue Hue' },
				cm_color_gain: { label: 'Color Gain' },
				cm_cyan_gain: { label: 'Cyan Gain' },
				cm_cyan_hue: { label: 'Cyan Hue' },
				cm_green_gain: { label: 'Green Gain' },
				cm_green_hue: { label: 'Green Hue' },
				cm_hue_phase: { label: 'Hue Phase' },
				cm_mag_gain: { label: 'Magenta Gain' },
				cm_mag_hue: { label: 'Magenta Hue' },
				cm_red_gain: { label: 'Red Gain' },
				cm_red_hue: { label: 'Red Hue' },
				cm_yellow_gain: { label: 'Yellow Gain' },
				cm_yellow_hue: { label: 'Yellow Hue' },
				// Advanced Setup Variables
				brightness: { label: 'Brightness' },
				brightness_comp: { label: 'Brightness Comp' },
				comp_level: { label: 'Comp Level' },
				gamma_offset: { label: 'Gamma Offset' },
				high_resolution: { label: 'High Resolution' },
				video_enhancement: { label: 'Video Enhancement' },
			},
			actions: {
				...COMMON[2],
				// General Camera Actions
				// Analog Audio Actions
				// Video Output Interface Actions
				// Encode Setup Actions
				tally: { choices: CHOICES.TALLY_MODE, default: 'TallyOn' },
				// Encode Transport Actions
				// NDI Discovery Server Actions
				// PTZ Actions
				pt: {
					choices: CHOICES.PTZ_DIRECTION,
					default: 'up',
					posPanChoices: CHOICES.POS_PAN_P200,
					posPanDefault: '0000',
					posTiltChoices: CHOICES.POS_TILT,
					posTiltDefault: '0000',
				},
				zoom: { ...COMMON[2].zoom, posZoomChoices: CHOICES.POS_ZOOM_30, posZoomDefault: '0000' },
				panSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 21, default: 11 } },
				tiltSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 18, default: 9 } },
				// Focus Actions
				// Exposure Actions
				ae_response: { range: { min: 1, max: 48, default: 1 } },
				bright_level: { range: { min: 0, max: 31, default: 16 } },
				expCompLvl: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				exposure_mode: { choices: CHOICES.EXP_MODE_1, default: 'FULL-AUTO' },
				gain: { choices: CHOICES.GAIN_2, default: 1 },
				gain_limit: { range: { min: 4, max: 15, default: 15 } },
				iris: { choices: CHOICES.IRIS_2, default: 12, range: { closed: '4', min: 5, max: 17 } },
				highSensitivity: { choices: CHOICES.ON_OFF, default: 'On' },
				shutter_speed: {
					shutter_50: CHOICES.SHUTTER_50,
					shutter_60: CHOICES.SHUTTER_60,
					default: 6,
					range: { min: 0, max: 21 },
				},
				slow_shutter_en: { choices: CHOICES.ON_OFF, default: 'Off' },
				slow_shutter_limit: { range: { min: 1, max: 6, default: 3 } },
				// White Balance Actions
				wb_mode: { choices: CHOICES.WB_MODE_2, default: 'AUTO' },
				// Picture Setup Actions
				backlight_com: { choices: CHOICES.ON_OFF, default: 'Off' },
				chroma_suppress: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				pictureEffect: { choices: CHOICES.PICTURE_EFFECT, default: 'BW' },
				gamma: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 1, default: 1 } },
				highlight_comp: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				highlight_comp_mask: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 1 } },
				ir_cutfilter: { choices: CHOICES.IR_CUT_FILTER_1, default: 'Auto' },
				low_latency: { choices: CHOICES.ON_OFF, default: 'Off' },
				noise_reduction: { choices: CHOICES.OFF_1_to_5, default: 'Off' },
				sharpness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				stabilizer: { choices: CHOICES.ON_OFF, default: 'Off' },
				// Color Matrix Actions
				cm_blue_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_blue_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_color_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
				cm_cyan_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_cyan_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_hue_phase: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
				cm_mag_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_mag_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				// Advanced Setup Actions
				brightness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 6, default: 3 } },
				brightness_comp: { choices: CHOICES.BRIGHTNESS_COMP, default: 'STANDARD' },
				comp_level: { choices: CHOICES.L_Mid_H, default: 'LOW' },
				gamma_offset: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -16, max: 64, default: 40 } },
				high_resolution: { choices: CHOICES.ON_OFF, default: 'Off' },
				video_enhancement: { choices: CHOICES.ON_OFF, default: 'Off' },
				// External Setup Actions
				// Detail Setup Actions
				// Gamma Setup Actions
				// Other Actions
			},
			feedback: {
				...COMMON[3],
			},
		},
		{
			id: 'A200_GEN1',
			apicalls: {
				...COMMON[0],
				birddogcmsetup: true,
				birddogadvancesetup: true,
				birddogexternalsetup: true,
				pt_pos: true,
			},
			variables: {
				...COMMON[1],
				// PTZ Variables
				pan_speed: { label: `Pan Speed` },
				tilt_speed: { label: `Tilt Speed` },
				pan_position: { label: `Pan Position` },
				tilt_position: { label: `Tilt Position` },
				// Exposure Variables
				ae_response: { label: `Ae Response` },
				gain_limit: { label: `Gain Limit` },
				high_sensitivity: { label: `High Sensitivity` },
				slow_shutter_en: { label: `Slow Shutter Enable` },
				slow_shutter_limit: { label: `Slow Shutter Limit` },
				// Picture Setup Variables
				backlight_com: { label: `Backlight Compensation` },
				chroma_suppress: { label: `Chroma Suppress` },
				effect: { label: `Effect` },
				gamma: { label: `Gamma` },
				highlight_comp: { label: `Highlight Compensation` },
				highlight_comp_mask: { label: `Highlight Compensation Mask` },
				ir_cutfilter: { label: `IR Cut Filter` },
				noise_reduction: { label: `Noise Reduction` },
				sharpness: { label: `Sharpness` },
				stabilizer: { label: `Stabilizer` },
				// Color Matrix Variables
				cm_blue_gain: { label: 'Blue Gain' },
				cm_blue_hue: { label: 'Blue Hue' },
				cm_color_gain: { label: 'Color Gain' },
				cm_cyan_gain: { label: 'Cyan Gain' },
				cm_cyan_hue: { label: 'Cyan Hue' },
				cm_green_gain: { label: 'Green Gain' },
				cm_green_hue: { label: 'Green Hue' },
				cm_hue_phase: { label: 'Hue Phase' },
				cm_mag_gain: { label: 'Magenta Gain' },
				cm_mag_hue: { label: 'Magenta Hue' },
				cm_red_gain: { label: 'Red Gain' },
				cm_red_hue: { label: 'Red Hue' },
				cm_yellow_gain: { label: 'Yellow Gain' },
				cm_yellow_hue: { label: 'Yellow Hue' },
				// Advanced Setup Variables
				brightness: { label: 'Brightness' },
				brightness_comp: { label: 'Brightness Comp' },
				comp_level: { label: 'Comp Level' },
				gamma_offset: { label: 'Gamma Offset' },
				high_resolution: { label: 'High Resolution' },
				video_enhancement: { label: 'Video Enhancement' },
				// External Setup Variables
				aux: { label: 'Aux' },
				v12vout: { label: '12v Out' },
			},
			actions: {
				...COMMON[2],
				// General Camera Actions
				// Analog Audio Actions
				// Video Output Interface Actions
				// Encode Setup Actions
				// Encode Transport Actions
				// NDI Discovery Server Actions
				// PTZ Actions
				pt: {
					choices: CHOICES.PTZ_DIRECTION,
					default: 'up',
					posPanChoices: CHOICES.POS_PAN_P200,
					posPanDefault: '0000',
					posTiltChoices: CHOICES.POS_TILT,
					posTiltDefault: '0000',
				},
				zoom: { ...COMMON[2].zoom, posZoomChoices: CHOICES.POS_ZOOM_30, posZoomDefault: '0000' },
				panSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 21, default: 11 } },
				tiltSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 18, default: 9 } },
				// Focus Actions
				// Exposure Actions
				ae_response: { range: { min: 1, max: 48, default: 1 } },
				bright_level: { range: { min: 0, max: 31, default: 16 } },
				expCompLvl: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				exposure_mode: { choices: CHOICES.EXP_MODE_1, default: 'FULL-AUTO' },
				gain: { choices: CHOICES.GAIN_2, default: 1 },
				gain_limit: { range: { min: 4, max: 15, default: 15 } },
				highSensitivity: { choices: CHOICES.ON_OFF, default: 'On' },
				iris: { choices: CHOICES.IRIS_2, default: 12, range: { closed: 0, min: 5, max: 17 } },
				shutter_speed: {
					shutter_50: CHOICES.SHUTTER_50,
					shutter_60: CHOICES.SHUTTER_60,
					default: 6,
					range: { min: 0, max: 21 },
				},
				slow_shutter_en: { choices: CHOICES.ON_OFF, default: 'Off' },
				slow_shutter_limit: { range: { min: 1, max: 6, default: 3 } },
				// White Balance Actions
				wb_mode: { choices: CHOICES.WB_MODE_2, default: 'AUTO' },
				// Picture Setup Actions
				backlight_com: { choices: CHOICES.ON_OFF, default: 'Off' },
				chroma_suppress: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				pictureEffect: { choices: CHOICES.PICTURE_EFFECT, default: 'BW' },
				gamma: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 1, default: 1 } },
				highlight_comp: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				highlight_comp_mask: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 1 } },
				ir_cutfilter: { choices: CHOICES.IR_CUT_FILTER_1, default: 'Auto' },
				noise_reduction: { choices: CHOICES.OFF_1_to_5, default: 'Off' },
				sharpness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				stabilizer: { choices: CHOICES.ON_OFF, default: 'Off' },
				// Color Matrix Actions
				cm_blue_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_blue_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_color_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
				cm_cyan_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_cyan_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_hue_phase: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
				cm_mag_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_mag_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				// Advanced Setup Actions
				brightness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 6, default: 3 } },
				brightness_comp: { choices: CHOICES.BRIGHTNESS_COMP, default: 'STANDARD' },
				comp_level: { choices: CHOICES.L_Mid_H, default: 'LOW' },
				gamma_offset: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -16, max: 64, default: 40 } },
				high_resolution: { choices: CHOICES.ON_OFF, default: 'Off' },
				video_enhancement: { choices: CHOICES.ON_OFF, default: 'Off' },
				// External Setup Actions
				aux: { choices: CHOICES.ON_OFF, default: 'Off' },
				v12vout: { choices: CHOICES.ON_OFF, default: 'Off' },
				// Detail Setup Actions
				// Gamma Setup Actions
				// Other Actions
			},
			feedback: {
				...COMMON[3],
			},
		},
		{
			id: 'A200_GEN2',
			apicalls: {
				...COMMON[0],
				birddogcmsetup: true,
				birddogadvancesetup: true,
				birddogexternalsetup: true,
				pt_pos: true,
			},
			variables: {
				...COMMON[1],
				// PTZ Variables
				pan_speed: { label: `Pan Speed` },
				tilt_speed: { label: `Tilt Speed` },
				pan_position: { label: `Pan Position` },
				tilt_position: { label: `Tilt Position` },
				// Exposure Variables
				ae_response: { label: `Ae Response` },
				gain_limit: { label: `Gain Limit` },
				high_sensitivity: { label: `High Sensitivity` },
				slow_shutter_en: { label: `Slow Shutter Enable` },
				slow_shutter_limit: { label: `Slow Shutter Limit` },
				// Picture Setup Variables
				backlight_com: { label: `Backlight Compensation` },
				chroma_suppress: { label: `Chroma Suppress` },
				effect: { label: `Effect` },
				gamma: { label: `Gamma` },
				highlight_comp: { label: `Highlight Compensation` },
				highlight_comp_mask: { label: `Highlight Compensation Mask` },
				ir_cutfilter: { label: `IR Cut Filter` },
				noise_reduction: { label: `Noise Reduction` },
				sharpness: { label: `Sharpness` },
				stabilizer: { label: `Stabilizer` },
				// Color Matrix Variables
				cm_blue_gain: { label: 'Blue Gain' },
				cm_blue_hue: { label: 'Blue Hue' },
				cm_color_gain: { label: 'Color Gain' },
				cm_cyan_gain: { label: 'Cyan Gain' },
				cm_cyan_hue: { label: 'Cyan Hue' },
				cm_green_gain: { label: 'Green Gain' },
				cm_green_hue: { label: 'Green Hue' },
				cm_hue_phase: { label: 'Hue Phase' },
				cm_mag_gain: { label: 'Magenta Gain' },
				cm_mag_hue: { label: 'Magenta Hue' },
				cm_red_gain: { label: 'Red Gain' },
				cm_red_hue: { label: 'Red Hue' },
				cm_yellow_gain: { label: 'Yellow Gain' },
				cm_yellow_hue: { label: 'Yellow Hue' },
				// Advanced Setup Variables
				brightness: { label: 'Brightness' },
				brightness_comp: { label: 'Brightness Comp' },
				comp_level: { label: 'Comp Level' },
				gamma_offset: { label: 'Gamma Offset' },
				high_resolution: { label: 'High Resolution' },
				video_enhancement: { label: 'Video Enhancement' },
				// External Setup Variables
				aux: { label: 'Aux' },
				v12vout: { label: '12v Out' },
			},
			actions: {
				...COMMON[2],
				// General Camera Actions
				// Analog Audio Actions
				// Video Output Interface Actions
				// Encode Setup Actions
				// Encode Transport Actions
				// NDI Discovery Server Actions
				// PTZ Actions
				pt: {
					choices: CHOICES.PTZ_DIRECTION,
					default: 'up',
					posPanChoices: CHOICES.POS_PAN_P200,
					posPanDefault: '0000',
					posTiltChoices: CHOICES.POS_TILT,
					posTiltDefault: '0000',
				},
				zoom: { ...COMMON[2].zoom, posZoomChoices: CHOICES.POS_ZOOM_30, posZoomDefault: '0000' },
				panSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 21, default: 11 } },
				tiltSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 18, default: 9 } },
				// Focus Actions
				// Exposure Actions
				ae_response: { range: { min: 1, max: 48, default: 1 } },
				bright_level: { range: { min: 0, max: 31, default: 16 } },
				expCompLvl: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				exposure_mode: { choices: CHOICES.EXP_MODE_1, default: 'FULL-AUTO' },
				gain: { choices: CHOICES.GAIN_2, default: 1 },
				gain_limit: { range: { min: 4, max: 15, default: 15 } },
				highSensitivity: { choices: CHOICES.ON_OFF, default: 'On' },
				iris: { choices: CHOICES.IRIS_2, default: 12, range: { closed: 0, min: 5, max: 17 } },
				shutter_speed: {
					shutter_50: CHOICES.SHUTTER_50,
					shutter_60: CHOICES.SHUTTER_60,
					default: 6,
					range: { min: 0, max: 21 },
				},
				slow_shutter_en: { choices: CHOICES.ON_OFF, default: 'Off' },
				slow_shutter_limit: { range: { min: 1, max: 6, default: 3 } },
				// White Balance Actions
				wb_mode: { choices: CHOICES.WB_MODE_2, default: 'AUTO' },
				// Picture Setup Actions
				backlight_com: { choices: CHOICES.ON_OFF, default: 'Off' },
				chroma_suppress: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				pictureEffect: { choices: CHOICES.PICTURE_EFFECT, default: 'BW' },
				gamma: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 1, default: 1 } },
				highlight_comp: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				highlight_comp_mask: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 1 } },
				ir_cutfilter: { choices: CHOICES.IR_CUT_FILTER_1, default: 'Auto' },
				noise_reduction: { choices: CHOICES.OFF_1_to_5, default: 'Off' },
				sharpness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				stabilizer: { choices: CHOICES.ON_OFF, default: 'Off' },
				// Color Matrix Actions
				cm_blue_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_blue_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_color_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
				cm_cyan_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_cyan_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_hue_phase: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
				cm_mag_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_mag_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				// Advanced Setup Actions
				brightness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 6, default: 3 } },
				brightness_comp: { choices: CHOICES.BRIGHTNESS_COMP, default: 'STANDARD' },
				comp_level: { choices: CHOICES.L_Mid_H, default: 'LOW' },
				gamma_offset: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -16, max: 64, default: 40 } },
				high_resolution: { choices: CHOICES.ON_OFF, default: 'Off' },
				video_enhancement: { choices: CHOICES.ON_OFF, default: 'Off' },
				// External Setup Actions
				aux: { choices: CHOICES.ON_OFF, default: 'Off' },
				v12vout: { choices: CHOICES.ON_OFF, default: 'Off' },
				// Detail Setup Actions
				// Gamma Setup Actions
				// Other Actions
			},
			feedback: {
				...COMMON[3],
			},
		},
		{
			id: 'A300_GEN1',
			apicalls: {
				...COMMON[0],
				birddogcmsetup: true,
				birddogadvancesetup: true,
				birddogexternalsetup: true,
				pt_pos: true,
			},
			variables: {
				...COMMON[1],
				// PTZ Variables
				pan_speed: { label: `Pan Speed` },
				tilt_speed: { label: `Tilt Speed` },
				pan_position: { label: `Pan Position` },
				tilt_position: { label: `Tilt Position` },
				// Exposure Variables
				ae_response: { label: `Ae Response` },
				gain_limit: { label: `Gain Limit` },
				high_sensitivity: { label: `High Sensitivity` },
				slow_shutter_en: { label: `Slow Shutter Enable` },
				slow_shutter_limit: { label: `Slow Shutter Limit` },
				// Picture Setup Variables
				backlight_com: { label: `Backlight Compensation` },
				chroma_suppress: { label: `Chroma Suppress` },
				effect: { label: `Effect` },
				gamma: { label: `Gamma` },
				highlight_comp: { label: `Highlight Compensation` },
				highlight_comp_mask: { label: `Highlight Compensation Mask` },
				ir_cutfilter: { label: `IR Cut Filter` },
				noise_reduction: { label: `Noise Reduction` },
				sharpness: { label: `Sharpness` },
				stabilizer: { label: `Stabilizer` },
				// Color Matrix Variables
				cm_blue_gain: { label: 'Blue Gain' },
				cm_blue_hue: { label: 'Blue Hue' },
				cm_color_gain: { label: 'Color Gain' },
				cm_cyan_gain: { label: 'Cyan Gain' },
				cm_cyan_hue: { label: 'Cyan Hue' },
				cm_green_gain: { label: 'Green Gain' },
				cm_green_hue: { label: 'Green Hue' },
				cm_hue_phase: { label: 'Hue Phase' },
				cm_mag_gain: { label: 'Magenta Gain' },
				cm_mag_hue: { label: 'Magenta Hue' },
				cm_red_gain: { label: 'Red Gain' },
				cm_red_hue: { label: 'Red Hue' },
				cm_yellow_gain: { label: 'Yellow Gain' },
				cm_yellow_hue: { label: 'Yellow Hue' },
				// Advanced Setup Variables
				brightness: { label: 'Brightness' },
				brightness_comp: { label: 'Brightness Comp' },
				comp_level: { label: 'Comp Level' },
				gamma_offset: { label: 'Gamma Offset' },
				high_resolution: { label: 'High Resolution' },
				video_enhancement: { label: 'Video Enhancement' },
				// External Setup Variables
				aux: { label: 'Aux' },
				rain_wiper: { label: 'Rain Wiper' },
				v12vout: { label: '12v Out' },
			},
			actions: {
				...COMMON[2],
				// General Camera Actions
				// Analog Audio Actions
				// Video Output Interface Actions
				// Encode Setup Actions
				// Encode Transport Actions
				// NDI Discovery Server Actions
				// PTZ Actions
				pt: {
					choices: CHOICES.PTZ_DIRECTION,
					default: 'up',
					posPanChoices: CHOICES.POS_PAN_P200,
					posPanDefault: '0000',
					posTiltChoices: CHOICES.POS_TILT,
					posTiltDefault: '0000',
				},
				zoom: { ...COMMON[2].zoom, posZoomChoices: CHOICES.POS_ZOOM_30, posZoomDefault: '0000' },
				panSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 21, default: 11 } },
				tiltSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 18, default: 9 } },
				// Focus Actions
				// Exposure Actions
				ae_response: { range: { min: 1, max: 48, default: 1 } },
				bright_level: { range: { min: 0, max: 31, default: 16 } },
				expCompLvl: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				exposure_mode: { choices: CHOICES.EXP_MODE_1, default: 'FULL-AUTO' },
				gain: { choices: CHOICES.GAIN_2, default: 1 },
				gain_limit: { range: { min: 4, max: 15, default: 15 } },
				highSensitivity: { choices: CHOICES.ON_OFF, default: 'On' },
				iris: { choices: CHOICES.IRIS_2, default: 12, range: { closed: 0, min: 5, max: 17 } },
				shutter_speed: {
					shutter_50: CHOICES.SHUTTER_50,
					shutter_60: CHOICES.SHUTTER_60,
					default: 6,
					range: { min: 0, max: 21 },
				},
				slow_shutter_en: { choices: CHOICES.ON_OFF, default: 'Off' },
				slow_shutter_limit: { range: { min: 1, max: 6, default: 3 } },
				// White Balance Actions
				wb_mode: { choices: CHOICES.WB_MODE_2, default: 'AUTO' },
				// Picture Setup Actions
				backlight_com: { choices: CHOICES.ON_OFF, default: 'Off' },
				chroma_suppress: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				pictureEffect: { choices: CHOICES.PICTURE_EFFECT, default: 'BW' },
				gamma: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 1, default: 1 } },
				highlight_comp: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				highlight_comp_mask: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 1 } },
				ir_cutfilter: { choices: CHOICES.IR_CUT_FILTER_1, default: 'Auto' },
				noise_reduction: { choices: CHOICES.OFF_1_to_5, default: 'Off' },
				sharpness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				stabilizer: { choices: CHOICES.ON_OFF, default: 'Off' },
				// Color Matrix Actions
				cm_blue_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_blue_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_color_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
				cm_cyan_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_cyan_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_hue_phase: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
				cm_mag_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_mag_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				// Advanced Setup Actions
				brightness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 6, default: 3 } },
				brightness_comp: { choices: CHOICES.BRIGHTNESS_COMP, default: 'STANDARD' },
				comp_level: { choices: CHOICES.L_Mid_H, default: 'LOW' },
				gamma_offset: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -16, max: 64, default: 40 } },
				high_resolution: { choices: CHOICES.ON_OFF, default: 'Off' },
				video_enhancement: { choices: CHOICES.ON_OFF, default: 'Off' },
				// External Setup Actions
				aux: { choices: CHOICES.ON_OFF, default: 'Off' },
				rain_wiper: { choices: CHOICES.ON_OFF, default: 'Off' },
				v12vout: { choices: CHOICES.ON_OFF, default: 'Off' },
				// Detail Setup Actions
				// Gamma Setup Actions
				// Other Actions
			},
			feedback: {
				...COMMON[3],
			},
		},
		{
			id: 'A300_GEN2',
			apicalls: {
				...COMMON[0],
				birddogcmsetup: true,
				birddogadvancesetup: true,
				birddogexternalsetup: true,
				pt_pos: true,
			},
			variables: {
				...COMMON[1],
				// PTZ Variables
				pan_speed: { label: `Pan Speed` },
				tilt_speed: { label: `Tilt Speed` },
				pan_position: { label: `Pan Position` },
				tilt_position: { label: `Tilt Position` },
				// Exposure Variables
				ae_response: { label: `Ae Response` },
				gain_limit: { label: `Gain Limit` },
				high_sensitivity: { label: `High Sensitivity` },
				slow_shutter_en: { label: `Slow Shutter Enable` },
				slow_shutter_limit: { label: `Slow Shutter Limit` },
				// Picture Setup Variables
				backlight_com: { label: `Backlight Compensation` },
				chroma_suppress: { label: `Chroma Suppress` },
				effect: { label: `Effect` },
				gamma: { label: `Gamma` },
				highlight_comp: { label: `Highlight Compensation` },
				highlight_comp_mask: { label: `Highlight Compensation Mask` },
				ir_cutfilter: { label: `IR Cut Filter` },
				noise_reduction: { label: `Noise Reduction` },
				sharpness: { label: `Sharpness` },
				stabilizer: { label: `Stabilizer` },
				// Color Matrix Variables
				cm_blue_gain: { label: 'Blue Gain' },
				cm_blue_hue: { label: 'Blue Hue' },
				cm_color_gain: { label: 'Color Gain' },
				cm_cyan_gain: { label: 'Cyan Gain' },
				cm_cyan_hue: { label: 'Cyan Hue' },
				cm_green_gain: { label: 'Green Gain' },
				cm_green_hue: { label: 'Green Hue' },
				cm_hue_phase: { label: 'Hue Phase' },
				cm_mag_gain: { label: 'Magenta Gain' },
				cm_mag_hue: { label: 'Magenta Hue' },
				cm_red_gain: { label: 'Red Gain' },
				cm_red_hue: { label: 'Red Hue' },
				cm_yellow_gain: { label: 'Yellow Gain' },
				cm_yellow_hue: { label: 'Yellow Hue' },
				// Advanced Setup Variables
				brightness: { label: 'Brightness' },
				brightness_comp: { label: 'Brightness Comp' },
				comp_level: { label: 'Comp Level' },
				gamma_offset: { label: 'Gamma Offset' },
				high_resolution: { label: 'High Resolution' },
				video_enhancement: { label: 'Video Enhancement' },
				// External Setup Variables
				aux: { label: 'Aux' },
				rain_wiper: { label: 'Rain Wiper' },
				v12vout: { label: '12v Out' },
			},
			actions: {
				...COMMON[2],
				// General Camera Actions
				// Analog Audio Actions
				// Video Output Interface Actions
				// Encode Setup Actions
				// Encode Transport Actions
				// NDI Discovery Server Actions
				// PTZ Actions
				pt: {
					choices: CHOICES.PTZ_DIRECTION,
					default: 'up',
					posPanChoices: CHOICES.POS_PAN_P200,
					posPanDefault: '0000',
					posTiltChoices: CHOICES.POS_TILT,
					posTiltDefault: '0000',
				},
				zoom: { ...COMMON[2].zoom, posZoomChoices: CHOICES.POS_ZOOM_30, posZoomDefault: '0000' },
				panSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 21, default: 11 } },
				tiltSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 18, default: 9 } },
				// Focus Actions
				// Exposure Actions
				ae_response: { range: { min: 1, max: 48, default: 1 } },
				bright_level: { range: { min: 0, max: 31, default: 16 } },
				expCompLvl: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				exposure_mode: { choices: CHOICES.EXP_MODE_1, default: 'FULL-AUTO' },
				gain: { choices: CHOICES.GAIN_2, default: 1 },
				gain_limit: { range: { min: 4, max: 15, default: 15 } },
				highSensitivity: { choices: CHOICES.ON_OFF, default: 'On' },
				iris: { choices: CHOICES.IRIS_2, default: 12, range: { closed: 0, min: 5, max: 17 } },
				shutter_speed: {
					shutter_50: CHOICES.SHUTTER_50,
					shutter_60: CHOICES.SHUTTER_60,
					default: 6,
					range: { min: 0, max: 21 },
				},
				slow_shutter_en: { choices: CHOICES.ON_OFF, default: 'Off' },
				slow_shutter_limit: { range: { min: 1, max: 6, default: 3 } },
				// White Balance Actions
				wb_mode: { choices: CHOICES.WB_MODE_2, default: 'AUTO' },
				// Picture Setup Actions
				backlight_com: { choices: CHOICES.ON_OFF, default: 'Off' },
				chroma_suppress: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				pictureEffect: { choices: CHOICES.PICTURE_EFFECT, default: 'BW' },
				gamma: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 1, default: 1 } },
				highlight_comp: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				highlight_comp_mask: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 15, default: 1 } },
				ir_cutfilter: { choices: CHOICES.IR_CUT_FILTER_1, default: 'Auto' },
				noise_reduction: { choices: CHOICES.OFF_1_to_5, default: 'Off' },
				sharpness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				stabilizer: { choices: CHOICES.ON_OFF, default: 'Off' },
				// Color Matrix Actions
				cm_blue_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_blue_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_color_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
				cm_cyan_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_cyan_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_green_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_hue_phase: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 255, default: 128 } },
				cm_mag_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_mag_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_red_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_gain: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				cm_yellow_hue: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 64, default: 32 } },
				// Advanced Setup Actions
				brightness: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 6, default: 3 } },
				brightness_comp: { choices: CHOICES.BRIGHTNESS_COMP, default: 'STANDARD' },
				comp_level: { choices: CHOICES.L_Mid_H, default: 'LOW' },
				gamma_offset: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -16, max: 64, default: 40 } },
				high_resolution: { choices: CHOICES.ON_OFF, default: 'Off' },
				video_enhancement: { choices: CHOICES.ON_OFF, default: 'Off' },
				// External Setup Actions
				aux: { choices: CHOICES.ON_OFF, default: 'Off' },
				rain_wiper: { choices: CHOICES.ON_OFF, default: 'Off' },
				v12vout: { choices: CHOICES.ON_OFF, default: 'Off' },
				// Detail Setup Actions
				// Gamma Setup Actions
				// Other Actions
			},
			feedback: {
				...COMMON[3],
			},
		},
		{
			id: 'P400',
			apicalls: {
				...COMMON[0],
				videooutputinterface: true,
				birddogdetsetup: true,
				birddoggammasetup: true,
				pt_pos: true,
			},
			variables: {
				...COMMON[1],
				// Video Output Interface Variables
				video_output: { label: `Video Mode` },
				// Encode Setup Variables
				tally_mode: { label: `Tally Mode` },
				// PTZ Variables
				pan_speed: { label: `Pan Speed` },
				tilt_speed: { label: `Tilt Speed` },
				pan_position: { label: `Pan Position` },
				tilt_position: { label: `Tilt Position` },
				// Exposure Variables
				ae_response: { label: `Ae Response` },
				backlight: { label: `Backlight` },
				gain_limit: { label: `Gain Limit` },
				gain_point: { label: `Gain Point` },
				gain_point_position: { label: `Gain Point Position ` },
				high_sensitivity: { label: `High Sensitivity` },
				shutter_max_speed: { label: `Shutter Max Speed` },
				shutter_min_speed: { label: `Shutter Min SPeed` },
				slow_shutter_en: { label: `Slow Shutter Enable ` },
				slow_shutter_limit: { label: `Slow Shutter Limit` },
				spotlight: { label: `Spotlight` },
				// White Balance Variables
				bg: { label: `BG` },
				br: { label: `BR` },
				gb: { label: `GB` },
				gr: { label: `GR` },
				level: { label: `Level` },
				matrix: { label: `Matrix` },
				offset: { label: `Offset` },
				phase: { label: `Phase` },
				rb: { label: `RB` },
				rg: { label: `RG` },
				select: { label: `Select` },
				speed: { label: `Speed` },
				// Picture Setup Variables
				chroma_suppress: { label: `Chroma Suppress` },
				highlight_comp: { label: `Highlight Compensation` },
				ir_cutfilter: { label: `IR Cut Filter` },
				stabilizer: { label: `Stabilizer` },
				threed_nr: { label: `3D Noise Reduction` },
				twod_nr: { label: `2D Noise Reduction` },
				// Detail Setup Variables
				bandwidth: { label: `Bandwidth` },
				bw_balance: { label: `BW Balance` },
				crispening: { label: `Crispening` },
				detail: { label: `Detail` },
				highlight_detail: { label: `Highlight Detail` },
				hv_balance: { label: `Hv Balance` },
				limit: { label: `Limit` },
				super_low: { label: `Super Low` },
				// Gamma Setup Variables
				black_gamma_level: { label: `Black Gamma Level` },
				black_level: { label: `Black Level` },
				black_level_range: { label: `Black Level Range` },
				effect: { label: `Effect` },
				level: { label: `Level` },
				offset: { label: `Offset` },
				pattern: { label: `Pattern` },
				pattern_fine: { label: `Pattern Fine` },
				settings: { label: `Settings` },
				visibility_enhancer: { label: `Visibilty Enhancer` },
			},
			actions: {
				...COMMON[2],
				// General Camera Actions
				// Analog Audio Actions
				// Video Output Interface Actions
				video_output: { choices: CHOICES.VIDEO_OUTPUT, default: 'NormalMode' },
				// Encode Setup Actions
				// Encode Transport Actions
				// NDI Discovery Server Actions
				// PTZ Actions
				pt: {
					choices: CHOICES.PTZ_DIRECTION,
					default: 'up',
					posPanChoices: CHOICES.POS_PAN_P200,
					posPanDefault: '0000',
					posTiltChoices: CHOICES.POS_TILT,
					posTiltDefault: '0000',
				},
				zoom: { ...COMMON[2].zoom, posZoomChoices: CHOICES.POS_ZOOM_20, posZoomDefault: '0000' },
				panSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 21, default: 11 } },
				tiltSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 18, default: 9 } },
				// Focus Actions
				// Exposure Actions
				ae_response: { range: { min: 4, max: 48, default: 1 } },
				bright_level: { range: { min: 0, max: 41, default: 21 } },
				backlight: { choices: CHOICES.ON_OFF, default: 'On' },
				expCompLvl: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				exposure_mode: { choices: CHOICES.EXP_MODE_3, default: 'FULL-AUTO' },
				gain: { choices: CHOICES.GAIN_3, default: 1 },
				gain_limit: { range: { min: 4, max: 13, default: 13 } },
				gain_point: { choices: CHOICES.ON_OFF, default: 'On' },
				highSensitivity: { choices: CHOICES.ON_OFF, default: 'On' },
				iris: { choices: CHOICES.IRIS_3, default: 17, range: { closed: 0, min: 5, max: 21 } },
				shutter_speed: {
					shutter_24: CHOICES.SHUTTER_4K_24,
					shutter_50: CHOICES.SHUTTER_4K_50,
					shutter_60: CHOICES.SHUTTER_4K_60,
					default: 18,
					range: { min: 6, max: 33 },
				},
				shutter_max_speed: { range: { min: 20, max: 33, default: 20 } },
				shutter_min_speed: { range: { min: 16, max: 33, default: 16 } },
				slow_shutter_en: { choices: CHOICES.ON_OFF, default: 'Off' },
				slow_shutter_limit: { range: { min: 6, max: 17, default: 12 } },
				spotlight: { choices: CHOICES.ON_OFF, default: 'Off' },
				// White Balance Actions
				bg: { range: { min: -99, max: 99, default: 0 } },
				br: { range: { min: -99, max: 99, default: 0 } },
				gb: { range: { min: -99, max: 99, default: 0 } },
				gr: { range: { min: -99, max: 99, default: 0 } },
				level: { range: { min: 0, max: 14, default: 7 } },
				matrix: { choices: CHOICES.ON_OFF, default: 'Off' },
				offset: { range: { min: 0, max: 14, default: 7 } },
				phase: { range: { min: 0, max: 14, default: 7 } },
				rb: { range: { min: -99, max: 99, default: 0 } },
				rg: { range: { min: -99, max: 99, default: 0 } },
				select: { choices: CHOICES.WB_SELECT, default: 'OFF' },
				speed: { range: { min: 1, max: 5, default: 3 } },
				wb_mode: { choices: CHOICES.WB_MODE_2, default: 'AUTO' },
				// Picture Setup Actions
				chroma_suppress: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				highlight_comp: { choices: CHOICES.ON_OFF, default: 'Off' },
				ir_cutfilter: { choices: CHOICES.IR_CUT_FILTER_2, default: 'On' },
				stabilizer: { choices: CHOICES.ON_OFF, default: 'Off' },
				threed_nr: { choices: CHOICES.OFF_1_to_5, default: 'Off' },
				twod_nr: { choices: CHOICES.OFF_1_to_5, default: 'Off' },
				// Color Matrix Actions
				// Advanced Setup Actions
				// External Setup Actions
				// Detail Setup Actions
				bandwidth: { choices: CHOICES.BANDWIDTH_4K, default: 'DEFAULT' },
				bw_balance: { choices: CHOICES.BW_BALANCE_4K, default: 'TYPE1' },
				crispening: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 7, default: 4 } },
				detail: { choices: CHOICES.ON_OFF, default: 'Off' },
				highlight_detail: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 4, default: 0 } },
				hv_balance: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -2, max: 2, default: 0 } },
				limit: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 7, default: 4 } },
				super_low: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 7, default: 4 } },
				// Gamma Setup Actions
				black_gamma_level: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 14, default: 7 } },
				black_level: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 96, default: 48 } },
				black_level_range: { choices: CHOICES.L_Mid_H, default: 'LOW' },
				effect: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -3, max: 3, default: 0 } },
				level: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 14, default: 0 } },
				offset: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -64, max: 64, default: 0 } },
				pattern: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 512, default: 256 } },
				pattern_fine: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 9, default: 5 } },
				settings: { choices: CHOICES.GAMMA_SETTINGS, default: 'PATTERN' },
				visibility_enhancer: { choices: CHOICES.ON_OFF, default: 'Off' },
				// Other Actions
			},
			feedback: {
				...COMMON[3],
			},
		},
		{
			id: 'P4K',
			apicalls: {
				...COMMON[0],
				videooutputinterface: true,
				birddogdetsetup: true,
				birddoggammasetup: true,
				pt_pos: true,
			},
			variables: {
				...COMMON[1],
				// Video Output Interface Variables
				video_output: { label: `Video Mode` },
				// Encode Setup Variables
				tally_mode: { label: `Tally Mode` },
				// PTZ Variables
				pan_speed: { label: `Pan Speed` },
				tilt_speed: { label: `Tilt Speed` },
				pan_position: { label: `Pan Position` },
				tilt_position: { label: `Tilt Position` },
				// Exposure Variables
				ae_response: { label: `Ae Response` },
				backlight: { label: `Backlight` },
				gain_limit: { label: `Gain Limit` },
				gain_point: { label: `Gain Point` },
				gain_point_position: { label: `Gain Point Position ` },
				high_sensitivity: { label: `High Sensitivity` },
				shutter_max_speed: { label: `Shutter Max Speed` },
				shutter_min_speed: { label: `Shutter Min SPeed` },
				slow_shutter_en: { label: `Slow Shutter Enable` },
				slow_shutter_limit: { label: `Slow Shutter Limit` },
				spotlight: { label: `Spotlight` },
				// White Balance Variables
				bg: { label: `BG` },
				br: { label: `BR` },
				gb: { label: `GB` },
				gr: { label: `GR` },
				level: { label: `Level` },
				matrix: { label: `Matrix` },
				offset: { label: `Offset` },
				phase: { label: `Phase` },
				rb: { label: `RB` },
				rg: { label: `RG` },
				select: { label: `Select` },
				speed: { label: `Speed` },
				// Picture Setup Variables
				chroma_suppress: { label: `Chroma Suppress` },
				highlight_comp: { label: `Highlight Compensation` },
				ir_cutfilter: { label: `IR Cut Filter` },
				nd_filter: { label: `ND Filter` },
				stabilizer: { label: `Stabilizer` },
				threed_nr: { label: `3D Noise Reduction` },
				twod_nr: { label: `2D Noise Reduction` },
				// Detail Setup Variables
				bandwidth: { label: `Bandwidth` },
				bw_balance: { label: `BW Balance` },
				crispening: { label: `Crispening` },
				detail: { label: `Detail` },
				highlight_detail: { label: `Highlight Detail` },
				hv_balance: { label: `Hv Balance` },
				limit: { label: `Limit` },
				super_low: { label: `Super Low` },
				// Gamma Setup Variables
				black_gamma_level: { label: `Black Gamma Level` },
				black_level: { label: `Black Level` },
				black_level_range: { label: `Black Level Range` },
				effect: { label: `Effect` },
				level: { label: `Level` },
				offset: { label: `Offset` },
				pattern: { label: `Pattern` },
				pattern_fine: { label: `Pattern Fine` },
				settings: { label: `Settings` },
				visibility_enhancer: { label: `Visibilty Enhancer` },
			},
			actions: {
				...COMMON[2],
				// General Camera Actions
				// Analog Audio Actions
				// Video Output Interface Actions
				video_output: { choices: CHOICES.VIDEO_OUTPUT, default: 'NormalMode' },
				// Encode Setup Actions
				// Encode Transport Actions
				// NDI Discovery Server Actions
				// PTZ Actions
				pt: {
					choices: CHOICES.PTZ_DIRECTION,
					default: 'up',
					posPanChoices: CHOICES.POS_PAN_P200,
					posPanDefault: '0000',
					posTiltChoices: CHOICES.POS_TILT,
					posTiltDefault: '0000',
				},
				zoom: { ...COMMON[2].zoom, posZoomChoices: CHOICES.POS_ZOOM_12, posZoomDefault: '0000' },
				panSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 21, default: 11 } },
				tiltSpeed: { choices: CHOICES.SPEED_CHANGES, default: 'up', range: { min: 0, max: 18, default: 9 } },
				// Focus Actions
				// Exposure Actions
				ae_response: { range: { min: 1, max: 48, default: 1 } },
				bright_level: { range: { min: 5, max: 37, default: 21 } },
				backlight: { choices: CHOICES.ON_OFF, default: 'On' },
				expCompLvl: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -128, max: 127, default: 0 } },
				exposure_mode: { choices: CHOICES.EXP_MODE_3, default: 'FULL-AUTO' },
				gain: { choices: CHOICES.GAIN_3, default: 1 },
				gain_limit: { range: { min: 4, max: 13, default: 13 } },
				gain_point: { choices: CHOICES.ON_OFF, default: 'On' },
				highSensitivity: { choices: CHOICES.ON_OFF, default: 'On' },
				iris: { choices: CHOICES.IRIS_4, default: 1, range: { closed: 5, min: 6, max: 21 } },
				shutter_speed: {
					shutter_24: CHOICES.SHUTTER_4K_24,
					shutter_50: CHOICES.SHUTTER_4K_50,
					shutter_60: CHOICES.SHUTTER_4K_60,
					default: 18,
					range: { min: 6, max: 33 },
				},
				shutter_max_speed: { range: { min: 20, max: 33, default: 20 } },
				shutter_min_speed: { range: { min: 16, max: 33, default: 16 } },
				slow_shutter_en: { choices: CHOICES.ON_OFF, default: 'Off' },
				slow_shutter_limit: { range: { min: 6, max: 17, default: 12 } },
				spotlight: { choices: CHOICES.ON_OFF, default: 'Off' },
				// White Balance Actions
				bg: { range: { min: -99, max: 99, default: 0 } },
				br: { range: { min: -99, max: 99, default: 0 } },
				gb: { range: { min: -99, max: 99, default: 0 } },
				gr: { range: { min: -99, max: 99, default: 0 } },
				level: { range: { min: 0, max: 14, default: 7 } },
				matrix: { choices: CHOICES.ON_OFF, default: 'Off' },
				offset: { range: { min: 0, max: 14, default: 7 } },
				phase: { range: { min: 0, max: 14, default: 7 } },
				rb: { range: { min: -99, max: 99, default: 0 } },
				rg: { range: { min: -99, max: 99, default: 0 } },
				select: { choices: CHOICES.WB_SELECT, default: 'OFF' },
				speed: { range: { min: 1, max: 5, default: 3 } },
				wb_mode: { choices: CHOICES.WB_MODE_2, default: 'AUTO' },
				// Picture Setup Actions
				chroma_suppress: { choices: CHOICES.OFF_L_M_H, default: 'OFF' },
				highlight_comp: { choices: CHOICES.ON_OFF, default: 'Off' },
				ir_cutfilter: { choices: CHOICES.IR_CUT_FILTER_2, default: 'On' },
				nd_filter: { range: { min: 0, max: 3, default: 2 } },
				stabilizer: { choices: CHOICES.ON_OFF, default: 'Off' },
				threed_nr: { choices: CHOICES.OFF_1_to_5, default: 'Off' },
				twod_nr: { choices: CHOICES.OFF_1_to_5, default: 'Off' },
				// Color Matrix Actions
				// Advanced Setup Actions
				// External Setup Actions
				// Detail Setup Actions
				bandwidth: { choices: CHOICES.BANDWIDTH_4K, default: 'DEFAULT' },
				bw_balance: { choices: CHOICES.BW_BALANCE_4K, default: 'TYPE1' },
				crispening: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 7, default: 4 } },
				detail: { choices: CHOICES.ON_OFF, default: 'Off' },
				highlight_detail: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 4, default: 0 } },
				hv_balance: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -2, max: 2, default: 0 } },
				limit: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 7, default: 4 } },
				super_low: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 7, default: 4 } },
				// Gamma Setup Actions
				black_gamma_level: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 14, default: 7 } },
				black_level: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 96, default: 48 } },
				black_level_range: { choices: CHOICES.L_Mid_H, default: 'LOW' },
				effect: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -3, max: 3, default: 0 } },
				level: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 14, default: 0 } },
				offset: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: -64, max: 64, default: 0 } },
				pattern: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 512, default: 256 } },
				pattern_fine: { choices: CHOICES.UP_DOWN_VALUE, default: 'up', range: { min: 0, max: 9, default: 5 } },
				settings: { choices: CHOICES.GAMMA_SETTINGS, default: 'PATTERN' },
				visibility_enhancer: { choices: CHOICES.ON_OFF, default: 'Off' },
				// Other Actions
			},
			feedback: {
				...COMMON[3],
			},
		},
	],
}