export const APP_DOM_ID = 'bilibili-subtitle'

export const IFRAME_ID = 'bilibili-subtitle-iframe'

export const STORAGE_ENV = 'bilibili-subtitle_env'
export const STORAGE_TEMP = 'bilibili-subtitle_temp'

export const PROMPT_TYPE_TRANSLATE = 'translate'
export const PROMPT_TYPE_SUMMARIZE_OVERVIEW = 'summarize_overview'
export const PROMPT_TYPE_SUMMARIZE_KEYPOINT = 'summarize_keypoint'
export const PROMPT_TYPE_SUMMARIZE_BRIEF = 'summarize_brief'
export const PROMPT_TYPE_ASK = 'ask'
export const PROMPT_TYPES = [{
  name: '翻译',
  type: PROMPT_TYPE_TRANSLATE,
}, {
  name: '概览',
  type: PROMPT_TYPE_SUMMARIZE_OVERVIEW,
}, {
  name: '要点',
  type: PROMPT_TYPE_SUMMARIZE_KEYPOINT,
}, {
  name: '总结',
  type: PROMPT_TYPE_SUMMARIZE_BRIEF,
}, {
  name: '提问',
  type: PROMPT_TYPE_ASK,
}]

export const SUMMARIZE_TYPES = {
  brief: {
    name: '总结',
    desc: '一句话总结',
    downloadName: '💡视频总结💡',
    promptType: PROMPT_TYPE_SUMMARIZE_BRIEF,
  },
  overview: {
    name: '概览',
    desc: '可定位到视频位置',
    downloadName: '💡视频概览💡',
    promptType: PROMPT_TYPE_SUMMARIZE_OVERVIEW,
  },
  keypoint: {
    name: '要点',
    desc: '完整的要点提取',
    downloadName: '💡视频要点💡',
    promptType: PROMPT_TYPE_SUMMARIZE_KEYPOINT,
  },
}

export const PROMPT_DEFAULTS = {
  [PROMPT_TYPE_TRANSLATE]: `You are a professional translator. Translate following video subtitles to language '{{language}}'.
Preserve incomplete sentence.
Translate in the same json format.
Answer in markdown json format.

video subtitles:

\`\`\`
{{subtitles}}
\`\`\``,
  [PROMPT_TYPE_SUMMARIZE_OVERVIEW]: `You are a helpful assistant that summarize key points of video subtitle.
Summarize 3 to 8 brief key points in language '{{language}}'.
Answer in markdown json format.
The emoji should be related to the key point and 1 char length.

example output format:

\`\`\`json
[
  {
    "time": "03:00",
    "emoji": "👍",
    "key": "key point 1"
  },
  {
    "time": "10:05",
    "emoji": "😊",
    "key": "key point 2"
  }
]
\`\`\`

The video's title: '''{{title}}'''.
The video's subtitles:

'''
{{subtitles}}
'''`,
  [PROMPT_TYPE_SUMMARIZE_KEYPOINT]: `You are a helpful assistant that summarize key points of video subtitle.
Summarize brief key points in language '{{language}}'.
Answer in markdown json format.

example output format:

\`\`\`json
[
  "key point 1",
  "key point 2"
]
\`\`\`

The video's title: '''{{title}}'''.
The video's subtitles:

'''
{{segment}}
'''`,
  [PROMPT_TYPE_SUMMARIZE_BRIEF]: `You are a helpful assistant that summarize video subtitle.
Summarize in language '{{language}}'.
Answer in markdown json format.

example output format:

\`\`\`json
{
  "summary": "brief summary"
}
\`\`\`

The video's title: '''{{title}}'''.
The video's subtitles:

'''
{{segment}}
'''`,
  [PROMPT_TYPE_ASK]: `You are a helpful assistant who answers question related to video subtitles.
Answer in language '{{language}}'.

The video's title: '''{{title}}'''.
The video's subtitles:

'''
{{segment}}
'''

Question: '''{{question}}'''
Answer:
`,
}

export const EVENT_EXPAND = 'expand'

export const TASK_EXPIRE_TIME = 15*60*1000

export const PAGE_MAIN = 'main'
export const PAGE_SETTINGS = 'settings'

export const TRANSLATE_COOLDOWN = 5*1000
export const TRANSLATE_FETCH_DEFAULT = 15
export const TRANSLATE_FETCH_MIN = 5
export const TRANSLATE_FETCH_MAX = 25
export const TRANSLATE_FETCH_STEP = 5
export const LANGUAGE_DEFAULT = 'en'

export const TOTAL_HEIGHT_MIN = 400
export const TOTAL_HEIGHT_DEF = 520
export const TOTAL_HEIGHT_MAX = 800
export const HEADER_HEIGHT = 44
export const TITLE_HEIGHT = 24
export const SEARCH_BAR_HEIGHT = 32
export const RECOMMEND_HEIGHT = 36

export const WORDS_RATE = 0.75
export const WORDS_MIN = 500
export const WORDS_MAX = 16000
export const WORDS_STEP = 500
export const SUMMARIZE_THRESHOLD = 100
export const SUMMARIZE_LANGUAGE_DEFAULT = 'cn'
export const SUMMARIZE_ALL_THRESHOLD = 5
export const ASK_ENABLED_DEFAULT = true
export const DEFAULT_SERVER_URL_OPENAI = 'https://api.openai.com'
export const CUSTOM_MODEL_TOKENS = 16385

export const MODELS = [{
  code: 'gpt-3.5-turbo',
  name: 'gpt-3.5-turbo',
  tokens: 4096,
}, {
  code: 'gpt-3.5-turbo-0125',
  name: 'gpt-3.5-turbo-0125',
  tokens: 16385,
}, {
  code: 'gpt-3.5-turbo-1106',
  name: 'gpt-3.5-turbo-1106',
  tokens: 16385,
}, {
  code: 'custom',
  name: '自定义',
}]
export const GEMINI_TOKENS = 32768
export const MODEL_DEFAULT = MODELS[1].code
export const MODEL_MAP: {[key: string]: typeof MODELS[number]} = {}
for (const model of MODELS) {
  MODEL_MAP[model.code] = model
}

export const LANGUAGES = [{
  code: 'en',
  name: 'English',
}, {
  code: 'ena',
  name: 'American English',
}, {
  code: 'enb',
  name: 'British English',
}, {
  code: 'cn',
  name: '中文简体',
}, {
  code: 'cnt',
  name: '中文繁体',
}, {
  code: 'Spanish',
  name: 'español',
}, {
  code: 'French',
  name: 'Français',
}, {
  code: 'Arabic',
  name: 'العربية',
}, {
  code: 'Russian',
  name: 'русский',
}, {
  code: 'German',
  name: 'Deutsch',
}, {
  code: 'Portuguese',
  name: 'Português',
}, {
  code: 'Italian',
  name: 'Italiano',
}]
export const LANGUAGES_MAP: {[key: string]: typeof LANGUAGES[number]} = {}
for (const language of LANGUAGES) {
  LANGUAGES_MAP[language.code] = language
}
