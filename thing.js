var testTimeSeconds = 1500,
    pageName;
! function(ಠ_ಠ232) {
    ಠ_ಠ232[ಠ_ಠ232.welcome = 0] = "welcome", ಠ_ಠ232[ಠ_ಠ232.instructions = 1] = "instructions", ಠ_ಠ232[ಠ_ಠ232.questions = 2] = "questions", ಠ_ಠ232[ಠ_ಠ232.score = 3] = "score"
}(pageName || (pageName = {}));
var TestSessionModel = function() {
        function ಠ_ಠ232(ಠ_ಠ232) {
            this.currentQuestionId = 0, this.ಠ_ಠ239 = 0, this.secondsRemaining = 0, this.secondsUsed = 0, this.currentQuestionTracking = -1, this.currentQuestionStartTime = 0, this.answers = {}, this.ageGroup = ಠ_ಠ232, this.languageCode = languageCode
        }
        return ಠ_ಠ232.prototype.ಠ_ಠ247 = function() {
            this.startTime = new Date, this.ಠ_ಠ253(), debugMode || (window.ಠ_ಠ249 = function() {
                return !0
            })
        }, ಠ_ಠ232.prototype.ಠ_ಠ250 = function() {
            this.endTime = new Date, this.ಠ_ಠ253(), window.ಠ_ಠ249 = null
        }, ಠ_ಠ232.prototype.ಠ_ಠ253 = function() {
            this.secondsRemaining = testTimeSeconds - ((Date.now() - +this.startTime) / 1e3 | 0), this.secondsUsed = (Date.now() - +this.startTime) / 1e3 | 0
        }, ಠ_ಠ232
    }(),
    QuestionAnswerModel = function() {
        function ಠ_ಠ232() {
            this.questionId = 0, this.answerId = -1, this.answerCount = 0, this.totalTimeMs = 0, this.visitCount = 0
        }
        return ಠ_ಠ232
    }(),
    ScoreRequest = function() {
        function ಠ_ಠ232() {}
        return ಠ_ಠ232
    }(),
    ScoreResponse = function() {
        function ಠ_ಠ232() {}
        return ಠ_ಠ232
    }(),
    Index = function() {
        function ಠ_ಠ232() {
            this.ಠ_ಠ259 = pageName.welcome, this.ಠ_ಠ260 = 0, this.ಠ_ಠ261 = {}, this.ಠ_ಠ262 = {}, this.ಠ_ಠ263 = !1, this.$testTimeCounter = $(".testCountdown"), this.$testCountdownProgressbar = $("#testCountdownProgressbar"), this.$testCountdownProgressbar.attr("aria-valuemax", testTimeSeconds), this.ಠ_ಠ267(), this.ಠ_ಠ269(), this.ಠ_ಠ273(), this.ಠ_ಠ266(), this.ಠ_ಠ300(), $(".question").fadeOut(), this.showPage(pageName.welcome)
        }
        return ಠ_ಠ232.prototype.ಠ_ಠ266 = function() {
            $("img").contextmenu(function(ಠ_ಠ232) {
                ಠ_ಠ232.preventDefault()
            })
        }, ಠ_ಠ232.prototype.ಠ_ಠ267 = function() {
            var ಠ_ಠ232 = this;
            $(".answer").click(function(e) {
                var o = $(e.target),
                    s, i = o.closest(".question").data("questionid"),
                    n = o.data("answerid");
                ಠ_ಠ232.ಠ_ಠ268(i, n)
            })
        }, ಠ_ಠ232.prototype.ಠ_ಠ268 = function(ಠ_ಠ232, e) {
            var o = $(".question_" + ಠ_ಠ232 + " .answer-button[data-answerid='" + e + "']"),
                s = o.closest(".question");
            if (0 !== o.length) {
                var i = this.ಠ_ಠ281.answers[ಠ_ಠ232];
                i.answerId = e, i.answerCount++, s.find(".answer-button").removeClass("answer-button-selected"), o.addClass("answer-button-selected"), this.goToNextQuestion()
            }
        }, ಠ_ಠ232.prototype.ಠ_ಠ269 = function() {
            var ಠ_ಠ232 = this,
                e = !1;
            $(window).keyup(function(ಠ_ಠ232) {
                e = !1
            }), $(window).keydown(function(o) {
                if (e) return !1;
                e = !0;
                var s = o.keyCode;
                switch (s) {
                    case 37:
                    case 38:
                        ಠ_ಠ232.ಠ_ಠ287() && ಠ_ಠ232.goToPreviousQuestion();
                        break;
                    case 13:
                    case 39:
                    case 40:
                        ಠ_ಠ232.ಠ_ಠ287() && ಠ_ಠ232.goToNextQuestion();
                        break
                }
                if (s >= 65 && s <= 90 && (s -= 16), s >= 48 && s <= 57) {
                    var i = s - 48;
                    ಠ_ಠ232.ಠ_ಠ287() && ಠ_ಠ232.ಠ_ಠ268(ಠ_ಠ232.ಠ_ಠ281.currentQuestionId, i - 1)
                }
            })
        }, ಠ_ಠ232.prototype.ಠ_ಠ270 = function(ಠ_ಠ232) {
            var e = this.ಠ_ಠ281.answers[ಠ_ಠ232];
            return e || ((e = new QuestionAnswerModel).questionId = ಠ_ಠ232, this.ಠ_ಠ281.answers[ಠ_ಠ232] = e, e)
        }, ಠ_ಠ232.prototype.showPage = function(ಠ_ಠ232) {
            for (var e in this.ಠ_ಠ259 = ಠ_ಠ232, Object.keys(pageName)) {
                var o = $(".page_" + pageName[e]);
                pageName[ಠ_ಠ232] === pageName[e] ? o.show() : o.hide()
            }
            if (ಠ_ಠ232 === pageName.questions) $(".footer").hide(), $("body").each(function(ಠ_ಠ232, e) {
                e.style.setProperty("margin-bottom", "5px", "important")
            }), $(".copyrightFloat").show();
            else {
                $(".footer").show();
                var s = $(".footer").height();
                $("body").each(function(ಠ_ಠ232, e) {
                    e.style.setProperty("margin-bottom", s + "px", "important")
                }), $(".copyrightFloat").hide()
            }
            window.scrollTo(0, 0), this.ಠ_ಠ301(ಠ_ಠ232)
        }, ಠ_ಠ232.prototype.ಠ_ಠ273 = function() {
            var ಠ_ಠ232 = this;
            $(".questionPrevious").click(function() {
                return ಠ_ಠ232.goToPreviousQuestion()
            }), $(".questionNext").click(function() {
                return ಠ_ಠ232.goToNextQuestion()
            }), $(".questionFinish").click(function() {
                return ಠ_ಠ232.userEndTest()
            })
        }, ಠ_ಠ232.prototype.goToNextQuestion = function() {
            this.ಠ_ಠ263 || (this.ಠ_ಠ281.ಠ_ಠ239++, this.ಠ_ಠ281.ಠ_ಠ239 >= totalTestCount && (this.ಠ_ಠ281.ಠ_ಠ239 = totalTestCount - 1), this.ಠ_ಠ281.currentQuestionId = this.ಠ_ಠ262[this.ಠ_ಠ281.ಠ_ಠ239], this.ಠ_ಠ277())
        }, ಠ_ಠ232.prototype.goToPreviousQuestion = function() {
            this.ಠ_ಠ263 || (this.ಠ_ಠ281.ಠ_ಠ239--, this.ಠ_ಠ281.ಠ_ಠ239 < 0 && (this.ಠ_ಠ281.ಠ_ಠ239 = 0), this.ಠ_ಠ281.currentQuestionId = this.ಠ_ಠ262[this.ಠ_ಠ281.ಠ_ಠ239], this.ಠ_ಠ277())
        }, ಠ_ಠ232.prototype.ಠ_ಠ277 = function() {
            var ಠ_ಠ232 = this;
            this.ಠ_ಠ279(), this.ಠ_ಠ263 = !0, $(".question").fadeOut("fast"), $("#question_" + this.ಠ_ಠ281.currentQuestionId).fadeIn("fast", function() {
                ಠ_ಠ232.ಠ_ಠ263 = !1
            }), 0 === this.ಠ_ಠ281.ಠ_ಠ239 ? $(".questionPrevious").css("visibility", "hidden") : $(".questionPrevious").css("visibility", "visible"), this.ಠ_ಠ281.ಠ_ಠ239 === totalTestCount - 1 ? ($(".questionNext").css("visibility", "hidden"), $(".lastQuestion").show()) : ($(".questionNext").css("visibility", "visible"), $(".lastQuestion").hide()), window.scrollTo(0, 0), this.ಠ_ಠ302(this.ಠ_ಠ281.currentQuestionId)
        }, ಠ_ಠ232.prototype.ಠ_ಠ279 = function() {
            var ಠ_ಠ232 = Date.now() - +this.ಠ_ಠ281.startTime | 0,
                e = this.ಠ_ಠ281.currentQuestionTracking,
                o = ಠ_ಠ232 - this.ಠ_ಠ281.currentQuestionStartTime;
            if (this.ಠ_ಠ281.currentQuestionTracking = this.ಠ_ಠ281.ಠ_ಠ239, this.ಠ_ಠ281.currentQuestionStartTime = ಠ_ಠ232, -1 !== e) {
                var s = this.ಠ_ಠ262[e],
                    i = this.ಠ_ಠ281.answers[s];
                i.totalTimeMs += o, i.visitCount++
            }
        }, ಠ_ಠ232.prototype.startTest = function(ಠ_ಠ232) {
            this.ಠ_ಠ281 = new TestSessionModel(ಠ_ಠ232);
            for (var e = 0; e < totalTestCount; e++) {
                var o, s = $("#question_" + e).closest(".question"),
                    i = s.data("questionnumber"),
                    n = s.data("questionid");
                this.ಠ_ಠ270(n), this.ಠ_ಠ261[n] = i, this.ಠ_ಠ262[i] = n
            }
            this.showPage(pageName.instructions);
            var r = ageGroupText[ಠ_ಠ232],
                u = $(".ageGroupTextContainer"),
                a = $(".ageGroupText");
            r ? (u.show(), a.html(r)) : u.hide(), this.ಠ_ಠ299(ಠ_ಠ232)
        }, ಠ_ಠ232.prototype.startTestQuestions = function() {
            this.ಠ_ಠ281.ಠ_ಠ247(), this.ಠ_ಠ294(1e3), this.ಠ_ಠ277(), this.showPage(pageName.questions)
        }, ಠ_ಠ232.prototype.userEndTest = function() {
            this.showEndTestDialog()
        }, ಠ_ಠ232.prototype.showEndTestDialog = function() {
            window.scrollTo(0, 0);
            var ಠ_ಠ232 = {
                backdrop: "static",
                keyboard: !0,
                focus: !0,
                show: !0
            };
            $("#endTestDialog").modal(ಠ_ಠ232)
        }, ಠ_ಠ232.prototype.hideEndTestDialog = function() {
            $("#endTestDialog").modal("hide")
        }, ಠ_ಠ232.prototype.endTest = function() {
            this.hideEndTestDialog(), this.ಠ_ಠ293(), this.ಠ_ಠ279(), this.ಠ_ಠ281.ಠ_ಠ250(), this.showPage(pageName.score), $(".scoreCalculating").show(), $(".scoreResult").hide(), this.getScore()
        }, ಠ_ಠ232.prototype.ಠ_ಠ287 = function() {
            return !(this.ಠ_ಠ259 !== pageName.questions || !this.ಠ_ಠ281) && !(!this.ಠ_ಠ281.startTime || this.ಠ_ಠ281.endTime)
        }, ಠ_ಠ232.prototype.getScore = function() {
            var ಠ_ಠ232 = this,
                e = new ScoreRequest;
          			console.log(e);
            e.authorizationToken = authorizationToken, e.session = this.ಠ_ಠ281, e.languageCode = languageCode;
            var o = $.ajax({
                url: "/Score/Score?lang=" + languageCode + "&rnd=" + Math.random().toString(),
                method: "POST",
                cache: !1,
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify(e),
                beforeSend: function() {
                    $(".scoreCalculating").show(), $(".scoreResult").hide()
                },
                complete: function() {
                    $(".scoreCalculating").hide(), $(".scoreResult").show(), window.scrollTo(0, 0)
                },
                error: function(e, o, s) {
                    var i = o + " (" + e.state() + ")";
                    ಠ_ಠ232.ಠ_ಠ292("Something went wrong communicating with server: " + i), ಠ_ಠ232.ಠ_ಠ291(i)
                },
                success: function(e, o, s) {
                    var i = e;
                    if (!i.success) return ಠ_ಠ232.ಠ_ಠ292("Error calculating score: " + i.errorMessage), void ಠ_ಠ232.ಠ_ಠ291(i.errorMessage);
                    authorizationToken != i.authorizationToken && alert("Now this is awkward. We put in this little check to verify stuff, and it just triggered.\r\n\r\nSo we're not entirely sure if the result you received is correct. If you are on a company network with a caching proxy please try to take the test outside of the company network."), $(".resultScoreIq").hide(), $(".resultScoreLow").hide(), $(".resultScoreError").hide(), i.iq && "0" != i.iq ? ($(".resultScoreIq").show(), $(".scoreIqText").text(i.iq + (i.orMore ? " " + or_more : "")), $("#scorePercentile").text(i.percentile + (i.orMore ? " " + or_more : "")), $("#gaussImage1").attr("src", i.gaussImage1)) : $(".resultScoreLow").show()
                }
            });
            this.ಠ_ಠ303(this.ಠ_ಠ281.secondsUsed)
        }, ಠ_ಠ232.prototype.ಠ_ಠ291 = function(ಠ_ಠ232) {
            if (this.ಠ_ಠ260++, !(this.ಠ_ಠ260 > 15)) {
                var e = $("#retrySubmitDialog"),
                    o = $("#retrySubmitDialogBody");
                o.text(""), ಠ_ಠ232 && o.text("Reason: " + ಠ_ಠ232);
                var s = {
                    backdrop: "static",
                    keyboard: !0,
                    focus: !0,
                    show: !0
                };
                e.modal(s)
            }
        }, ಠ_ಠ232.prototype.ಠ_ಠ292 = function(ಠ_ಠ232) {
            $(".scoreCalculating").hide(), $(".resultScoreIq").hide(), $(".resultScoreLow").hide(), $(".scoreResult").show(), $(".scoreResult").show(), $(".resultScoreError").show(), $("#scoreError").text(ಠ_ಠ232), $("#errorReportLink").attr("href", $("#errorReportLink").attr("href").replace("$error$", encodeURIComponent(ಠ_ಠ232)))
        }, ಠ_ಠ232.prototype.ಠ_ಠ293 = function() {
            clearInterval(this.ಠ_ಠ295), $(".testCountdownContainer").hide()
        }, ಠ_ಠ232.prototype.ಠ_ಠ294 = function(ಠ_ಠ232) {
            var e = this;
            this.ಠ_ಠ293(), this.ಠ_ಠ296(), this.ಠ_ಠ295 = setInterval(function() {
                e.ಠ_ಠ296()
            }, ಠ_ಠ232), $(".testCountdownContainer").show()
        }, ಠ_ಠ232.prototype.ಠ_ಠ296 = function() {
            this.ಠ_ಠ281.ಠ_ಠ253();
            var ಠ_ಠ232 = this.ಠ_ಠ281.secondsRemaining,
                e = ಠ_ಠ232 / 60 | 0,
                o = ಠ_ಠ232 % 60 | 0;
            this.$testTimeCounter.text(("00" + e.toString()).slice(-2) + ":" + ("00" + o.toString()).slice(-2)), this.$testCountdownProgressbar.attr("aria-valuenow", this.ಠ_ಠ281.secondsRemaining);
            var s = Math.floor(100 / testTimeSeconds * this.ಠ_ಠ281.secondsUsed);
            this.$testCountdownProgressbar.text(100 - s + "%"), e < 1 && o < 1 && this.endTest()
        }, ಠ_ಠ232.prototype.ಠ_ಠ297 = function(ಠ_ಠ232) {
            try {
                gtag && ಠ_ಠ232()
            } catch (ಠ_ಠ232) {
                console.error(ಠ_ಠ232)
            }
        }, ಠ_ಠ232.prototype.ಠ_ಠ298 = function(ಠ_ಠ232) {
            this.ಠ_ಠ297(function() {
                return gtag("config", GA_MEASUREMENT_ID, {
                    user_id: ಠ_ಠ232
                })
            })
        }, ಠ_ಠ232.prototype.ಠ_ಠ299 = function(ಠ_ಠ232) {
            this.ಠ_ಠ297(function() {
                return gtag("event", "age_dimension", {
                    ageGroup: ಠ_ಠ232
                })
            })
        }, ಠ_ಠ232.prototype.ಠ_ಠ300 = function() {
            this.ಠ_ಠ298(authorizationToken.toString()), this.ಠ_ಠ297(function() {
                if (window.performance) {
                    var ಠ_ಠ232 = Math.round(performance.now());
                    gtag("event", "timing_complete", {
                        name: "load",
                        value: ಠ_ಠ232,
                        event_category: "JS Dependencies"
                    })
                }
            })
        }, ಠ_ಠ232.prototype.ಠ_ಠ301 = function(ಠ_ಠ232) {
            this.ಠ_ಠ297(function() {
                return gtag("config", GA_MEASUREMENT_ID, {
                    page_title: pageName[ಠ_ಠ232],
                    page_path: "/" + pageName[ಠ_ಠ232]
                })
            })
        }, ಠ_ಠ232.prototype.ಠ_ಠ302 = function(ಠ_ಠ232) {
            this.ಠ_ಠ297(function() {
                return gtag("config", GA_MEASUREMENT_ID, {
                    page_title: "Question " + ಠ_ಠ232.toString(),
                    page_path: "/question#" + ಠ_ಠ232.toString()
                })
            })
        }, ಠ_ಠ232.prototype.ಠ_ಠ303 = function(ಠ_ಠ232) {
            this.ಠ_ಠ297(function() {
                return gtag("event", "timing_complete", {
                    event_category: "Test",
                    name: "Finish",
                    value: Math.round(ಠ_ಠ232)
                })
            })
        }, ಠ_ಠ232.prototype.ಠ_ಠ304 = function(ಠ_ಠ232, e, o) {
            this.ಠ_ಠ297(function() {
                gtag("config", GA_MEASUREMENT_ID, {
                    custom_map: {
                        dimension1: "age",
                        dimension2: "iq",
                        metric1: "avg_page_load_time"
                    }
                }), gtag("event", "foo", {
                    age: 55,
                    avg_page_load_time: 1
                })
            })
        }, ಠ_ಠ232
    }(),
    index = new Index,
    Site = function() {
        function ಠ_ಠ232() {}
        return ಠ_ಠ232.prototype.showPrivacy = function() {
            var ಠ_ಠ232 = {
                backdrop: "static",
                keyboard: !0,
                focus: !0,
                show: !0
            };
            $(".showPrivacyDialog").modal(ಠ_ಠ232)
        }, ಠ_ಠ232
    }(),
    site = new Site;
