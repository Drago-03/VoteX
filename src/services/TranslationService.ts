import { Translate } from '@google-cloud/translate/build/src/v2';

interface TranslationResult {
  translatedText: string;
  sourceLanguage: string;
  targetLanguage: string;
  confidence: number;
}

interface SupportedLanguage {
  code: string;
  name: string;
  nativeName: string;
}

export class TranslationService {
  private static instance: TranslationService;
  private translate: Translate;
  private supportedIndianLanguages: SupportedLanguage[] = [
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' }
  ];

  private constructor() {
    this.translate = new Translate({
      projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
      keyFilename: process.env.GOOGLE_CLOUD_KEY_PATH
    });
  }

  static getInstance(): TranslationService {
    if (!TranslationService.instance) {
      TranslationService.instance = new TranslationService();
    }
    return TranslationService.instance;
  }

  async translateText(text: string, targetLang: string): Promise<TranslationResult> {
    try {
      const [translation, metadata] = await this.translate.translate(text, {
        to: targetLang,
        model: 'nmt' // Neural Machine Translation
      });

      return {
        translatedText: translation,
        sourceLanguage: metadata.data.translations[0].detectedSourceLanguage,
        targetLanguage: targetLang,
        confidence: metadata.data.translations[0].confidence || 1.0
      };
    } catch (error) {
      console.error('Translation failed:', error);
      throw new Error(`Translation failed: ${error.message}`);
    }
  }

  async translateBatch(texts: string[], targetLang: string): Promise<TranslationResult[]> {
    try {
      const [translations] = await this.translate.translate(texts, targetLang);
      return translations.map((translatedText, index) => ({
        translatedText,
        sourceLanguage: 'en', // Assuming source is English
        targetLanguage: targetLang,
        confidence: 1.0
      }));
    } catch (error) {
      console.error('Batch translation failed:', error);
      throw new Error(`Batch translation failed: ${error.message}`);
    }
  }

  getSupportedLanguages(): SupportedLanguage[] {
    return this.supportedIndianLanguages;
  }

  async detectLanguage(text: string): Promise<string> {
    try {
      const [detection] = await this.translate.detect(text);
      return detection.language;
    } catch (error) {
      console.error('Language detection failed:', error);
      throw new Error(`Language detection failed: ${error.message}`);
    }
  }

  isLanguageSupported(langCode: string): boolean {
    return this.supportedIndianLanguages.some(lang => lang.code === langCode);
  }

  getLanguageNativeName(langCode: string): string {
    const language = this.supportedIndianLanguages.find(lang => lang.code === langCode);
    return language ? language.nativeName : langCode;
  }
}

export default TranslationService.getInstance();
