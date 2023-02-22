import logging
from rich.logging import RichHandler

logging.basicConfig(
    level="NOTSET",
    format="%(asctime)s %(levelname)s: %(message)s",
    datefmt="%d/%b/%Y:%H:%M:%S %z",  # format of a standard HTTP
    handlers=[
        RichHandler(rich_tracebacks=True)
    ],  # RichHandler format and colorize text written by Python’s logging
)


class ScraperLogging(object):
    def __init__(
        self,
        name: str = "SCRAPER",
        file_name: str = "booking_scraper.log",
        file_mode: str = "a",
        level: str = "NOTSET",
        format: str = "%(asctime)s %(levelname)s: %(message)s",
        date_format: str = "%d/%b/%Y:%H:%M:%S %z",
        traceback: bool = True,
    ) -> None:
        self.name = name
        self.file_name = file_name
        self.file_mode = file_mode
        self.level = level
        self.format = format
        self.date_format = date_format
        self.traceback = traceback

    def __setup_loger(self):
        logging.basicConfig(
            filename=self.file_name,
            filemode=self.file_mode,
            level=self.level,
            format=self.format,
            datefmt=self.date_format,
            handlers=[RichHandler(rich_tracebacks=self.traceback)],
        )
        self.logger = logging.getLogger(self.name)

    def info(self, message: str, traceback: bool = False):
        self.traceback = traceback
        self.__setup_loger()
        return self.logger.info(message)

    def error(self, message: str, traceback: bool = True):
        self.traceback = traceback
        self.__setup_loger()
        return self.logger.warning(message)

    def critical(self, message: str, traceback: bool = True):
        self.traceback = traceback
        self.__setup_loger()
        return self.logger.critical(message)
