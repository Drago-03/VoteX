import { TranslationService } from './TranslationService';

interface VoiceCommand {
  command: string;
  action: () => Promise<void>;
  language?: string;
}

interface VoiceRecognitionResult {
  transcript: string;
  confidence: number;
  language: string;
}

export class VoiceCommandService {
  private static instance: VoiceCommandService;
  private recognition: SpeechRecognition;
  private isListening: boolean = false;
  private commands: Map<string, VoiceCommand> = new Map();
  private translator: TranslationService;

  private constructor() {
    this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    this.translator = TranslationService.getInstance();
    this.initializeRecognition();
    this.registerDefaultCommands();
  }

  static getInstance(): VoiceCommandService {
    if (!VoiceCommandService.instance) {
      VoiceCommandService.instance = new VoiceCommandService();
    }
    return VoiceCommandService.instance;
  }

  private initializeRecognition(): void {
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
    this.recognition.lang = 'en-IN';

    this.recognition.onresult = async (event: SpeechRecognitionEvent) => {
      const result = event.results[event.results.length - 1];
      const transcript = result[0].transcript.toLowerCase();
      const confidence = result[0].confidence;

      await this.handleVoiceCommand({
        transcript,
        confidence,
        language: this.recognition.lang
      });
    };

    this.recognition.onerror = (event: SpeechRecognitionError) => {
      console.error('Voice recognition error:', event.error);
      this.stopListening();
    };
  }

  private registerDefaultCommands(): void {
    this.commands.set('start voting', {
      command: 'start voting',
      action: async () => {
        // Implement voting start logic
      }
    });

    this.commands.set('confirm vote', {
      command: 'confirm vote',
      action: async () => {
        // Implement vote confirmation logic
      }
    });

    this.commands.set('cancel', {
      command: 'cancel',
      action: async () => {
        // Implement cancellation logic
      }
    });

    this.commands.set('change language', {
      command: 'change language',
      action: async () => {
        // Implement language change logic
      }
    });
  }

  async startListening(): Promise<void> {
    if (this.isListening) return;

    try {
      this.recognition.start();
      this.isListening = true;
    } catch (error) {
      console.error('Failed to start voice recognition:', error);
      throw error;
    }
  }

  stopListening(): void {
    if (!this.isListening) return;

    try {
      this.recognition.stop();
      this.isListening = false;
    } catch (error) {
      console.error('Failed to stop voice recognition:', error);
    }
  }

  async setLanguage(languageCode: string): Promise<void> {
    if (this.translator.isLanguageSupported(languageCode)) {
      this.recognition.lang = languageCode;
      if (this.isListening) {
        this.stopListening();
        await this.startListening();
      }
    } else {
      throw new Error(`Language ${languageCode} is not supported`);
    }
  }

  private async handleVoiceCommand(result: VoiceRecognitionResult): Promise<void> {
    if (result.confidence < 0.5) {
      console.log('Low confidence in voice recognition, ignoring command');
      return;
    }

    // Translate command if not in English
    let translatedCommand = result.transcript;
    if (result.language !== 'en-IN') {
      const translation = await this.translator.translateText(result.transcript, 'en');
      translatedCommand = translation.translatedText.toLowerCase();
    }

    // Find and execute matching command
    for (const [key, command] of this.commands) {
      if (translatedCommand.includes(key)) {
        await command.action();
        break;
      }
    }
  }

  registerCommand(command: VoiceCommand): void {
    this.commands.set(command.command.toLowerCase(), command);
  }

  removeCommand(commandText: string): void {
    this.commands.delete(commandText.toLowerCase());
  }

  dispose(): void {
    this.stopListening();
    this.commands.clear();
  }
}

export default VoiceCommandService.getInstance();
